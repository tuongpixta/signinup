import React, { useState, useEffect } from "react";
import TaskAdd from "../task-add/TaskAdd";
import TaskItem from "../task-item/TaskItem";
import api from "../../api/todo.api";
function Todo(props) {
  const token = props.token;
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getListTask = async () => {
    setIsLoading(true);
    setTasks(await api.getAllTask(token));
    setIsFetchingData(false);
  };

  const onAddTask = async (description) => {
    setIsFetchingData(true);
    await api.addTask(token, description);
    setTasks(await api.getAllTask(token));
    setIsFetchingData(false);
  };

  const onCbChange = async (taskId, completed) => {
    setIsFetchingData(true);
    await api.toggleComplete(token, taskId, completed);
    setTasks(await api.getAllTask(token));
    setIsFetchingData(false);
  };

  const onConfirmDelete = async (taskId) => {
    setIsFetchingData(true);
    await api.deleteTask(token, taskId);
    setTasks(await api.getAllTask(token));
    setIsFetchingData(false);
  };

  const onDoneClick = async (taskId, newDescription) => {
    setIsFetchingData(true);
    await api.updateDescription(token, taskId, newDescription);
    setTasks(await api.getAllTask(token));
    setIsFetchingData(false);
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
