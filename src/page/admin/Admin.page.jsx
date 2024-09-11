import React, { useEffect, useState } from "react";
import auth from "../../service/auth.service";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await auth("/users", formData);
    if (data) {
      localStorage.setItem("auth", JSON.stringify(data));
      nav("/dashboard", { state: { data } });
    }
  };
  useEffect(() => {
    const finder = localStorage.getItem("auth");
    if (finder) {
      nav("/dashboard");
    }
  }, []);
  return (
    <div className=" h-screen ">
      <form
        onSubmit={handleSubmit}
        className=" w-2/5 mx-auto mt-16 flex flex-col gap-4 bg-gray-100 px-5 py-10 border border-gray-700"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            name="email"
            className=" px-3 py-2 border border-gray-200 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            name="password"
            className=" px-3 py-2 border border-gray-200 rounded"
          />
        </div>
        <button
          type="submit"
          className=" py-2 w-full mt-5 bg-gray-700 border border-gray-700 text-gray-50 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
