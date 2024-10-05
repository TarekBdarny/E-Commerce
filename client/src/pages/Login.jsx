import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";

import LoadingSpinner from "../daisy/LoadingSpinner";
import toast from "react-hot-toast";
const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { loading, login } = useLogin(data);
  const handleLogin = (e) => {
    e.preventDefault();
    if (!data.username || !data.password) {
      toast.error("All fields are required");
      return;
    }

    if (data.username.length < 4) {
      toast.error("Username must be at least 4 characters");
      return;
    }

    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    login();
  };
  return (
    <div className="w-screen md:w-[700px] h-[500px]  px-8 py-4 flex flex-col md:flex-row justify-between md: items-center rounded-xl mt-4 ">
      {/* content */}
      <div className="flex flex-col justify-between p-3 ">
        <div>
          <h1 className="text-2xl font-semibold">Login to Tarek Express</h1>
          <p className="text-lg  my-3">Enter your credentials.</p>
        </div>
        <img
          src="login-illustration.png"
          className="hidden md:block size-72"
          alt=""
        />
      </div>
      {/* form */}
      <form onSubmit={handleLogin} className="flex flex-col gap-6">
        <label className="relative">
          <input
            type="text"
            id="username"
            className="input"
            autoCapitalize="on"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <label
            htmlFor="username"
            className={`input-label ${data.username !== "" && "test-class"}`}
          >
            Username
          </label>
        </label>
        <label className="relative">
          <input
            type="text"
            id="password"
            autoCapitalize="on"
            className="input"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <label
            htmlFor="password"
            className={`input-label ${data.password !== "" && "test-class"}`}
          >
            Password
          </label>
        </label>
        <button
          type="submit"
          className="btn bg-primary text-main-bg hover:bg-primary-hover hover:translate-y-[-3px] outline-none border-none transition duration-200"
        >
          {loading ? <LoadingSpinner /> : "Login"}
        </button>
        <div className="relative h-[1px] w-full bg-slate-400 flex justify-center items-center">
          <p className="bg-accent w-8 text-center rounded-lg">or</p>
        </div>
        <Link
          to={"/register"}
          className="underline underline-offset-2 flex items-center gap-2"
        >
          Create an account.
          <FaArrowTrendUp />
        </Link>
      </form>
    </div>
  );
};

export default Login;
