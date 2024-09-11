import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { NavComponent } from "./components";
import {
  AdminPage,
  BlogPage,
  DashBoardPage,
  DetailBookPage,
  HomePage,
  InventoryPage,
  UserPage,
} from "./page";

const App = () => {
  return (
    <div className=" main h-screen flex flex-col ">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:slug" element={<DetailBookPage />} />
        <Route path="/dashboard" element={<DashBoardPage />}>
          <Route index element={<InventoryPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
};

export default App;
