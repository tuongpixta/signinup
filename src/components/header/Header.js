import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logged out");
    navigate("/login");
    props.onLoggedOut();
  };
  return (
    <nav className="flex justify-between p-5 bg-gray-700">
      <ul className="">
        <li className="mr-6">
          <NavLink
            className={(isActive) =>
              "text-white hover:text-gray-300" + (isActive ? "active" : "")
            }
            to="/"
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
      {(props.token && (
        <ul className="flex ml-auto">
          <li className="mr-6">
            <NavLink
              className={(isActive) =>
                "text-white hover:text-gray-300" + (isActive ? "active" : "")
              }
              to="/todo"
            >
              Todo
            </NavLink>
          </li>
          <li className="mr-6">
            <button
              type="button"
              className=" text-white hover:text-gray-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      )) || (
        <ul>
          <li className="mr-6">
            <NavLink
              className={(isActive) =>
                "text-white hover:text-gray-300" + (isActive ? "active" : "")
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
export default Header;
