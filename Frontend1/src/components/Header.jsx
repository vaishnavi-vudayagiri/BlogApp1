import { NavLink } from "react-router";
import { useAuth } from "../stores/authStore";
import blog from "./blog.png";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);

  const getProfilePath = () => {
    if (!user) return "/";

    switch (user.role) {
      case "AUTHOR":
        return "/author-profile";

      case "ADMIN":
        return "/admin-profile";

      default:
        return "/user-profile";
    }
  };

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-600 hover:text-blue-400 transition duration-300";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md border-b border-blue-300">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3 group ">            

          <div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-blue-700 to-blue-700 bg-clip-text text-transparent">
              Blog Platform
            </h1>

            <p className="text-xs text-gray-400 tracking-widest">
              CREATE • INSPIRE • SHARE
            </p>
          </div>
        </NavLink>

        {/* NAV LINKS */}
        <ul className="flex items-center gap-8 text-sm md:text-base">

          <li>
            <NavLink to="/" end className={navStyle}>
              Home
            </NavLink>
          </li>

          {/* NOT LOGGED IN */}
          {!isAuthenticated && (
            <>
              <li>
                <NavLink to="/register" className={navStyle}>
                  Register
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-blue-500 duration-300"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}

          {/* LOGGED IN */}
          {isAuthenticated && (
            <li className="flex items-center gap-3 bg-pink-50 px-4 py-2 rounded-full shadow-sm hover:shadow-md duration-300">
              
              {/* Profile Image */}
              {user?.profileImageUrl ? (
                <img
                  src={user.profileImageUrl}
                  alt="profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-900"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-900 to-purple-500 text-white flex items-center justify-center font-bold">
                  {user?.firstName?.charAt(0)?.toUpperCase()}
                </div>
              )}

              <NavLink
                to={getProfilePath()}
                className="font-semibold text-gray-700 hover:text-blue-900 transition"
              >
                {user?.firstName || "Profile"}
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;