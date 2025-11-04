import React from "react";
import { Link } from "react-router-dom";

function Navigation({ user, logout }) {
  return (
    <div style={{ padding: "10px", background: "#ddd" }}>
      <b>Welcome {user.username}</b> &nbsp; | &nbsp;

      {user.role === "admin" && <Link to="/admin">Admin Dashboard</Link>}
      {user.role === "student" && <Link to="/student">Student Page</Link>}

      &nbsp; | &nbsp;
      <button onClick={logout} style={{ background: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: "4px" }}>
        Logout
      </button>
    </div>
  );
}

export default Navigation;
