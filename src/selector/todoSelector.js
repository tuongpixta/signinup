export const selectTasks = async (state) => {
  return await state.todoReducer.then((val) => val.tasks);
};
export const selectTask = async (state, task_id) => {
  return await state.todoReducer.then((val) =>
    val.tasks.filter((task) => (task._id = task_id)),
  );
};
