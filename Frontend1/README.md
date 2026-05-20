# FrontEnd Overview
## Technologies Used

- React JS
- Vite
- Tailwind CSS
- React Router DOM
- Zustand
- Axios

## Frontend Project Structure

FrontEnd\
│\
├── public\
│\
├── src\
│   ├── assets\
│   │\
│   ├── components\
│   │   ├── AdminProfile.jsx\
│   │   ├── ArticleByID.jsx\
│   │   ├── Articles.jsx\
│   │   ├── AuthorArticles.jsx\
│   │   ├── AuthorProfile.jsx\
│   │   ├── AuthorsList.jsx\
│   │   ├── EditArticle.jsx\
│   │   ├── Footer.jsx\
│   │   ├── Header.jsx\
│   │   ├── Home.jsx\
│   │   ├── Login.jsx\
│   │   ├── ProtectedRoute.jsx\
│   │   ├── Register.jsx\
│   │   ├── RootComponent.jsx\
│   │   ├── Unauthorized.jsx\
│   │   ├── UserProfile.jsx\
│   │   └── WriteArticles.jsx\
│   │\
│   ├── stores\
│   │   └── authStore.js\
│   │\
│   ├── styles\
│   │   └── common.jsx\
│   │\
│   ├── App.jsx\
│   ├── index.css\
│   └── main.jsx\
│\
├── .env\
├── .gitignore\
├── eslint.config.js\
├── index.html\
├── package.json\
├── vite.config.js\
└── README.md
## Installation Steps

### Step 1: Install Dependencies

```bash
npm install react-router-dom axios zustand tailwindcss
```
### Step 2: Create `.env` File

```env
VITE_API_URL=your_backend_url
```
### Step 3: Start Development Server

```bash
npm run dev
```
## To Deploy
### Use Vercel To Deploy Frontend
``` bash
Step 1 : Login to Render Webiste (https://vercel.com/)
Step 2 : Click on ADD New
Step 3 : Click on Project
Step 4 : Connect your Git To it and select The file
Step 5 :  Root Directiory : Frontend File
Step 6 : Add Environment Variables
-VITE_API_URL=your_backend_url(Deployed Render link)
Step 7 : Deploy
```
### After Deployment connect the frontend link in backend server.js at cors and redeploy the backend in render then frontend 
To access the data and backend we connect

# Deployment Link :  https://architecture-app-coral.vercel.app/
