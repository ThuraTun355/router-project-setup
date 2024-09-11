import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav className=" flex justify-between items-center py-3 text-lg font-semibold">
      <Link to={"/dashboard"}>
        <h1>DashBoard</h1>
      </Link>
      <Link to={"/admin"}>Admin</Link>
      <Link to={"/"}>Home</Link>
    </nav>
  );
};

export default NavComponent;
