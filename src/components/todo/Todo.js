import React, { useState } from "react";
import axios from "axios";
import Task from "../task-add/Task";
function Todo() {
  const token = window.sessionStorage.getItem("token");
  const [tasks, setTasks] = useState([]);
  axios
    .get("https://api-nodejs-todolist.herokuapp.com/task", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      setTasks(response.data.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  return (
    <div className="h-screen">
      <div className="bg-white p-10 rounded max-w-2xl mb-5 mx-auto">
        <h1 className="text-center text-3xl mb-5">Todos</h1>
        <Task />
        <div className="bordered">{/* {tasks && tasks.map()} */}</div>
      </div>
    </div>
  );
}
export default Todo;
