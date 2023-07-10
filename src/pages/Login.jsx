import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { Loop } from "@mui/icons-material";
function Login() {
  const {
    handleSubmit,
    handleChange,
    err,
    loader,
  }=useLogin()
  return (
    <div className="auth flex justify-center items-center h-[100vh]   flex-col ">
      <h1 className="text-[20px] text-[teal] mb-[20px] ">Login</h1>
      <form action="" className="flex flex-col p-2  w-[270px] gap-5 ">
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          className="p-2  border-b-2 border-blue-300 outline-none"
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          className="p-2  border-b-2 border-blue-300 outline-none"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-900 text-white  py-2 rounded-md "
        >
          {loader ? <Loop className={`${loader && "rotate-icon"}`} /> : "Login"}
        </button>{" "}
        {err && <p className="text-center text-xs text-red-500">{err}</p>}
        <span className="text-center text-xs ">
          Dont have an account? <Link to="/register" className="underline text-sm">Register</Link>{" "}
        </span>
      </form>
    </div>
  );
}

export default Login;
