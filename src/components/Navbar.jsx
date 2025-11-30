import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div>Click to Navigate</div>
      <Link to="/Form">
        <button>Form</button>
      </Link>
      <Link to="/Dashboard">
        <button>Dashboard</button>
      </Link>
    </>
  );
}
