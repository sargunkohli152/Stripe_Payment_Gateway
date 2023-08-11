import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../config";

function Auth({ type }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    remember: false,
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('token', user.email)
    if(type === 'login'){

      axios
      .post(`${apiUrl}/user/v1/login`, user)
      .then(setUser({ name: "", email: "", password: "", remember: false }))
      
      //if has plan then navigate to home page else plan page
      .then(navigate("/plan"));
    }
    else {
      axios
      .post(`${apiUrl}/user/v1/new`, user)
      .then(setUser({ name: "", email: "", password: "", remember: false }))
      
      //if has plan then navigate to home page else plan page
      .then(navigate("/plan"));
    }
    };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <div className="bg-white rounded-2xl py-16 px-12 gap-3 flex flex-col justify-center">
        {type === "register" ? (
          <h1 className="font-semibold  text-xl w-full text-center ">
            Create Account
          </h1>
        ) : (
          <h1 className="font-semibold  text-xl w-full text-center ">
            Login to your account
          </h1>
        )}
        <form onSubmit={onSubmit} className="flex flex-col gap-5 ">
          {type === "register" && (
            <div className="flex flex-col">
              <label className="font-semibold">Name</label>
              <input
              onChange={onChange}
                className="p-2 md:72 lg:w-80 focus:border-[#1e4d91] px-2 border-2 border-[#cdcdcd] outline-none rounded-md"
                type="text"
                name="name"
              />
            </div>
          )}
          <div className="flex flex-col">
            <label className="font-semibold">Email</label>
            <input
            onChange={onChange}
              className="p-2 md:72 lg:w-80 focus:border-[#1e4d91] px-2 border-2 border-[#cdcdcd] outline-none rounded-md"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Password</label>
            <input
            onChange={onChange}
              className="p-2 md:72 lg:w-80 focus:border-[#1e4d91] px-2 border-2 border-[#cdcdcd] outline-none rounded-md"
              type="password"
              name="password"
            />
          </div>
          <div className="flex gap-2">
            <input
            onChange={() => setUser({ ...user, remember: !user.remember })}
              className="outline-none border-2 border-[#cdcdcd]"
              type="checkbox"
              name="remember"
              id="remember"

            />
            <h1 className="font-semibold">Remember Me</h1>
          </div>
          <button className="bg-[#1e4d91] text-white py-3 px-10 font-semibold rounded-md">
            {type === "register" ? "Sign Up" : "Login"}
          </button>
        </form>
        {type === "register" ? (
          <Link to={"/login"}>
            Alreay have an account?
            <span className="text-[#1e4d91]"> Login</span>
          </Link>
        ) : (
          <Link to={"/register"}>
            New to myApp?<span className="text-[#1e4d91]"> Sign Up</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Auth;
