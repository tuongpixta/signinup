import axios from "axios";
const url = "https://api-nodejs-todolist.herokuapp.com/task";

const getAllTask = async (token) => {
  let res;
  await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      res = response.data.data;
    })
    .catch((error) => console.log(error));
  return res;
};

const addTask = async (token, description) => {
  await axios
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
    })
    .catch(function (error) {
      console.log(error);
    });
};

const toggleComplete = async (token, taskId, completed) => {
  await axios
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
    })
    .catch(function (error) {
      console.log(error);
    });
};

const deleteTask = async (token, taskId) => {
  await axios
    .delete(`${url}/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      console.log(response.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const updateDescription = async (token, taskId, newDescription) => {
  await axios
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
    })
    .catch(function (error) {
      console.log(error);
    });
};

const api = {
  getAllTask,
  addTask,
  toggleComplete,
  deleteTask,
  updateDescription,
};
export default api;
