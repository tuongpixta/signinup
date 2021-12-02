import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Screen from "./components/screen/Screen";
import Dashboard from "./components/dashboard/Dashboard";
import Todo from "./components/todo/Todo";

function App() {
  const [token, setToken] = useState(window.sessionStorage.getItem("token"));

  const handleLogout = () => {
    window.sessionStorage.removeItem("token");
    setToken("");
    console.log("Logged out");
  };

  return (
    <Router>
      <nav className="flex justify-between p-5 bg-gray-700">
        <ul className="">
          <li className="mr-6">
            <Link className=" text-white hover:text-gray-300" to="/">
              Dashboard
            </Link>
          </li>
        </ul>
        {(token && (
          <ul className="flex ml-auto">
            <li className="mr-6">
              <Link className=" text-white hover:text-gray-300" to="/todo">
                Todo
              </Link>
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
              <Link className=" text-white hover:text-gray-300" to="/login">
                Login
              </Link>
            </li>
          </ul>
        )}
      </nav>
      <div className="p-5">
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/todo" exact element={<Todo />} />
          <Route path="/login" exact element={<Screen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
