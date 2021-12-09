import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Screen from "./components/screen/Screen";
import Dashboard from "./components/dashboard/Dashboard";
import Todo from "./components/todo/Todo";
import Header from "./components/header/Header";

function App() {
  const [token, setToken] = useState(window.sessionStorage.getItem("token"));
  // let navigate = useNavigate();

  const onLoggedIn = () => {
    setToken(window.sessionStorage.getItem("token"));
  };

  const onLoggedOut = () => {
    setToken(window.sessionStorage.removeItem("token"));
  };

  return (
    <Router>
      <Header token={token} onLoggedOut={onLoggedOut} />
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/todo" element={<Todo token={token} />} />
          <Route path="/login" element={<Screen onLoggedIn={onLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
