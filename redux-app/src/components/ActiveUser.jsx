import React from "react";
import { useSelector } from "react-redux";

function ActiveUsers() {
  const user = useSelector((state) => {
    state.user.value;
  });

  return (
    <div>
      <h2>Active Users</h2>
      <p>{user.email}</p>
    </div>
  );
}
export default ActiveUsers;
