import React from "react";
function Dashboard() {
  const token = window.sessionStorage.getItem("token");
  console.log(token);
  return <div>welcome</div>;
}
export default Dashboard;
