import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskAdd from "../task-add/TaskAdd";
import TaskItem from "../task-item/TaskItem";
function Todo(props) {
  const token = props.token;
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://api-nodejs-todolist.herokuapp.com/task";

  const getListTask = () => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setIsLoading(true);
        setTasks(
          response.data.data.sort((a, b) => {
            if (a.completed) return 1;
            if (a.description < b.description) return -1;
            if (a.description > b.description) return 1;
            return 0;
          }),
        );
        setIsFetchingData(false);
      })
      .catch((error) => console.log(error));
  };

  const onAddTask = (description) => {
    setIsFetchingData(true);
    axios
      .post(
        "https://api-nodejs-todolist.herokuapp.com/task",
        {
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(function (response) {
        console.log(response.statusText);
        getListTask();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onCbChange = (taskId, completed) => {
    setIsFetchingData(true);
    axios
      .put(
        `${url}/${taskId}`,
        {
          completed,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(function (response) {
        console.log(response.statusText);
        getListTask();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onConfirmDelete = (taskId) => {
    setIsFetchingData(true);
    axios
      .delete(`${url}/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log(response.statusText);
        getListTask();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onDoneClick = (taskId, newDescription) => {
    setIsFetchingData(true);
    axios
      .put(
        `${url}/${taskId}`,
        {
          description: newDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(function (response) {
        console.log(response.statusText);
        getListTask();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!isLoading) {
      getListTask();
    }
  });

  return (
    <div className="h-screen">
      <div className="bg-white p-10 rounded max-w-2xl mb-5 mx-auto relative">
        {isFetchingData ? (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-90 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-800"></div>
          </div>
        ) : (
          ""
        )}
        <h1 className="text-center text-3xl mb-5">Todos</h1>
        <TaskAdd onSubmit={onAddTask} token={token} />
        <div className="bordered">
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              token={token}
              onCbChange={onCbChange}
              onConfirmDelete={onConfirmDelete}
              onDoneClick={onDoneClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Todo;
