import React, { useState } from "react";
function TaskAdd(props) {
  const [description, setDescription] = useState("");
  const onChange = (e) => setDescription(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(description);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 gap-4 mb-7 mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <input
              onChange={onChange}
              className="col-span-2 border-solid border-gray-300 border-b pl-2 outline-none"
              type="task"
              placeholder="Enter task"
              name="task"
              id="task"
              autoComplete="off"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 rounded text-white w-32 p-2 mx-auto"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default TaskAdd;
