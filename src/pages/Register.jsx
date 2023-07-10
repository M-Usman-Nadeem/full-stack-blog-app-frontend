import React from "react";
import { Loop } from "@mui/icons-material";
import useRegister from "../hooks/useRegister";
import { Link } from "react-router-dom";
const Register = () => {
  const {
    handleSubmit,
    handleChange,
    err,
    loader,
  }=useRegister()
  return (
    <div className="auth flex justify-center items-center h-[100vh]   flex-col ">
      <h1 className="text-[20px] text-[teal] mb-[20px] ">Register</h1>
      <form
        action=""
        className="flex flex-col p-3 box-border rounded-md border-[2px] p border-blue-700 w-[270px] gap-5 "
      >
        <input
          required
          type="text"
          placeholder="username"
          name="userName"
          onChange={handleChange}
          className="p-2  border-b-2 border-blue-300 outline-none"
        />
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
          {loader ? (
             <Loop className={`${loader&& "rotate-icon"}`} />
          ) : (
            "Register"
          )}
        </button>
        {err && <p className="text-center text-xs text-red-500">{err}</p>}
        <span className="text-center text-xs ">
          Already Registered ?{" "}
          <Link to="/login" className="underline text-sm">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
