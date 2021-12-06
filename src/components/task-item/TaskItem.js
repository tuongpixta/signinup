import React, { useState } from "react";
function TaskItem(props) {
  const { task } = props;
  const [isEditting, setIsEditting] = useState(false);
  const [newValue, setNewValue] = useState(props.task.description);
  const oldValue = props.task.description;

  const onDelete = () => {
    if (window.confirm("delete?")) props.onConfirmDelete(task._id);
  };

  const onCheckboxChange = () => {
    props.onCbChange(task._id, !task.completed);
  };

  const onEditClick = () => {
    setIsEditting(true);
  };
  const onDoneClick = () => {
    props.onDoneClick(task._id, newValue);
    setIsEditting(false);
  };
  const onCancelClick = () => {
    setNewValue(oldValue);
    setIsEditting(false);
  };

  const onInputChange = (e) => setNewValue(e.target.value);

  return (
    <div className="grid grid-cols-4 gap-4 mb-3">
      {!isEditting ? (
        <div className="col-span-3 flex items-center">
          <input
            id={task._id}
            type="checkbox"
            onChange={onCheckboxChange}
            checked={task.completed}
          />
          <label htmlFor={task._id} className="ml-3">
            {task.description}
          </label>
        </div>
      ) : (
        <div className="col-span-3 flex items-center">
          <input
            className="border-b border-gray border-solid w-full outline-none focus:bg-gray-100 px-3 py-1 rounded"
            type="text"
            onChange={onInputChange}
            value={newValue}
          />
        </div>
      )}
      {!isEditting ? (
        <div className="grid grid-cols-2">
          <button
            type="button"
            className="bg-blue-500 rounded text-white p-2 mx-auto"
            onClick={onEditClick}
          >
            Edit
          </button>
          <button
            type="button"
            className="bg-red-500 rounded text-white p-2 mx-auto"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2">
          <button
            type="button"
            className="bg-blue-500 rounded text-white p-2 mx-auto"
            onClick={onDoneClick}
          >
            Done
          </button>
          <button
            type="button"
            className="bg-red-500 rounded text-white p-2 mx-auto"
            onClick={onCancelClick}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
export default TaskItem;
