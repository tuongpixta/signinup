import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signin(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    const val = e.target.value;
    switch (e.target.name) {
      case "email":
        setEmail(val);
        break;
      case "password":
        setPassword(val);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    console.log(email);
    console.log(password);
    e.preventDefault();
    axios
      .post("https://api-nodejs-todolist.herokuapp.com/user/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        window.sessionStorage.setItem("token", response.data.token);
        try {
          navigate("/");
          props.onLoggedIn();
        } catch (e) {
          alert(e.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form className="bg-white p-10 rounded" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <h1 className="text-2xl mb-10">Sign in</h1>
        <div className="grid grid-cols-1 gap-4 mb-7 mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <label className="text-right" htmlFor="email">
              <b>Email</b>
            </label>
            <input
              onChange={handleChange}
              className="col-span-2 border-solid border-gray-300 border-b pl-2"
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              autoComplete="off"
              required
              value={email}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <label className="text-right" htmlFor="password">
              <b>Password</b>
            </label>
            <input
              onChange={handleChange}
              className="col-span-2 border-solid border-gray-300 border-b pl-2"
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              autoComplete="off"
              required
              value={password}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded text-white w-32 p-2 mx-auto"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
export default Signin;
