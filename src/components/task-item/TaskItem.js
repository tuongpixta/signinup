// import React, { useState } from "react";
// import axios from "axios";
// function Task() {
//   const token = window.sessionStorage.getItem("token");
//   const [description, setDescription] = useState("");

//   const handleChange = (e) => setDescription(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(
//         "https://api-nodejs-todolist.herokuapp.com/task",
//         {
//           description,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       )
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="flex flex-col">
//         <div className="grid grid-cols-1 gap-4 mb-7 mx-auto">
//           <div className="grid grid-cols-3 gap-4">
//             <input
//               onChange={handleChange}
//               className="col-span-2 border-solid border-gray-300 border-b pl-2 outline-none"
//               type="task"
//               placeholder="Enter task"
//               name="task"
//               id="task"
//               autoComplete="off"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-blue-500 rounded text-white w-32 p-2 mx-auto"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }
// export default Task;
