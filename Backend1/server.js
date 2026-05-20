import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import { userApp } from "./APIs/UserAPI.js";
import { authorApp } from "./APIs/AuthorAPI.js";
import { adminApp } from "./APIs/AdminAPI.js";
import { commonApp } from "./APIs/CommonAPI.js";

config();

const app = exp();

/* ================= CORS FIX ================= */
const allowedOrigins = [
  "http://localhost:5173",
  "https://architecture-app-coral.vercel.app",
  "https://blog-app1-6pk9.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (Postman, server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(null, true); 
      // IMPORTANT: don't block, avoid missing headers issue
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// handle preflight requests
app.options(/.*/, cors());

/* ================= MIDDLEWARES ================= */
app.use(cookieParser());
app.use(exp.json());

/* ================= ROUTES ================= */
app.use("/user-api", userApp);
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);
app.use("/auth", commonApp);

/* ================= DB CONNECTION ================= */
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB server connected");

    const port = process.env.PORT || 8764;
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });

  } catch (err) {
    console.log("DB connection error:", err);
  }
};

connectDB();

/* ================= INVALID ROUTE ================= */
app.use((req, res) => {
  res.status(404).json({
    message: `path ${req.url} is invalid`,
  });
});

/* ================= ERROR HANDLING ================= */
app.use((err, req, res, next) => {
  console.log("error:", err);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  const errCode =
    err.code ?? err.cause?.code ?? err.errorResponse?.code;

  const keyValue =
    err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];

    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  res.status(500).json({
    message: "error occurred",
    error: "Server side error",
  });
});