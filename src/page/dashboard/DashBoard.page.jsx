import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const DashBoardPage = () => {
  const { state } = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    const finder = localStorage.getItem("auth");
    if (!finder) {
      nav("/admin");
    }
  }, []);
  return (
    <div className=" grid grid-cols-10 h-screen">
      <div className=" col-span-2">
        <ul>
          <Link to={"/dashboard"}>
            {state?.data?.email}
            <li>Dashboard</li>
          </Link>

          <Link to={"/dashboard/blog"}>
            {" "}
            <li>Blog</li>
          </Link>

          <Link to={"/dashboard/user"}>
            {" "}
            <li>User</li>{" "}
          </Link>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardPage;
