import React, { useState } from "react";
import axios from "axios";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [repassword, setRepassword] = useState("");
  const [age, setAge] = useState("");
  const handleChange = (e) => {
    const val = e.target.value;
    switch (e.target.name) {
      case "name":
        setName(val);
        break;
      case "email":
        setEmail(val);
        break;
      case "password":
        setPassword(val);
        break;
      case "age":
        setAge(val);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(age);
    e.preventDefault();
    axios
      .post("https://api-nodejs-todolist.herokuapp.com/user/register", {
        name: name,
        email: email,
        password: password,
        age: age,
      })
      .then(function (response) {
        console.log(response);
        window.sessionStorage.setItem("token", response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form className="bg-white p-10 rounded" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <h1 className="text-2xl mb-10">Sign up</h1>
        <div className="grid grid-cols-1 gap-4 mb-7 mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <label className="text-right" htmlFor="name">
              <b>Name</b>
            </label>
            <input
              onChange={handleChange}
              className="col-span-2 border-solid border-gray-300 border-b pl-2"
              type="text"
              placeholder="Enter name"
              name="name"
              id="name"
              autoComplete="off"
              required
              value={name}
            />
          </div>
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
          <div className="grid grid-cols-3 gap-4">
            <label className="text-right" htmlFor="repassword">
              <b>Repeat Password</b>
            </label>
            <input
              onChange={handleChange}
              className="col-span-2 border-solid border-gray-300 border-b pl-2"
              type="password"
              placeholder="Enter Repeat Password"
              name="repassword"
              id="repassword"
              autoComplete="off"
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <label className="text-right" htmlFor="age">
              <b>age</b>
            </label>
            <input
              onChange={handleChange}
              className="col-span-2 border-solid border-gray-300 border-b pl-2"
              type="number"
              placeholder="Enter age"
              name="age"
              id="age"
              autoComplete="off"
              required
              value={age}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded text-white w-32 p-2 mx-auto"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
export default Signup;
