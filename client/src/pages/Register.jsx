import { useContext } from "react";
import { Context } from "../context/auth";

import { Link } from "react-router-dom";
function Register() {
  const { setemail, setpassword, msgs, setname, Register } =
    useContext(Context);

  return (
    <div className="max-w-[100%] min-h-[100%] ">
      <div className="max-w-[400px] min-h-[200px] bg-[#0b1018] rounded-lg flex flex-col gap-5 p-5 mx-auto mt-30 shadow-lg shadow-red-500/20">
        <h1 className="text-white text-3xl font-bold">Register</h1>
        <div className="flex flex-col gap-3 ">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-slate-400"
          >
            email
          </label>
          <input
            className=" text-slate-300 border-1 border-slate-700 p-2 rounded-lg outline-none"
            type="email"
            placeholder="email"
            id="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-3 ">
          <label
            htmlFor="username"
            className="text-lg font-semibold text-slate-400"
          >
            username
          </label>
          <input
            className="text-slate-300 border-1 border-slate-700 p-2 rounded-lg outline-none"
            type="text"
            placeholder="username"
            id="username"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-3 ">
          <label
            htmlFor="password"
            className="text-lg font-semibold text-slate-400"
          >
            password
          </label>
          <input
            className="text-slate-300 border-1 border-slate-700 p-2 rounded-lg outline-none"
            type="password"
            placeholder="password"
            id="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>

        <button
          onClick={() => {
            Register();
          }}
          className=" bg-gradient-to-br from-blue-600 to-violet-600 text-2xl text-white p-2 rounded-lg mt-2 hover:cursor-pointer hover:scale-105 transition hover:from-blue-800  duration-300 "
        >
          Register
        </button>
        <p className="text-center text-lg font-semibold text-red-500">{msgs}</p>
        <p>
          tienes cuenta?{" "}
          <Link
            to={"/login"}
            className="text-blue-600 hover:underline hover:text-blue-800 duration-300 "
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
