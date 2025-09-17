import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/auth";
function Login() {
  const { setemail, setpassword, Login,msgs } = useContext(Context);


  return (
    <div className="max-w-[100%] min-h-[100%] ">
      <div className="max-w-[400px] min-h-[200px] bg-[#0b1018] rounded-lg flex flex-col gap-5 p-5 mx-auto mt-30 shadow-lg shadow-red-500/20">
        <h1 className="text-white text-3xl font-bold">Login</h1>
        <div className="flex flex-col gap-3 ">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-slate-400"
          >
            email
          </label>
          <input
            className="border-1 border-slate-700 p-2 rounded-lg outline-none"
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
            htmlFor="password"
            className="text-lg font-semibold text-slate-400"
          >
            password
          </label>
          <input
            className="border-1 border-slate-700 p-2 rounded-lg outline-none"
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
            Login();
          }}
          className="bg-gradient-to-br from-blue-600 to-violet-600 text-2xl text-white p-2 rounded-lg mt-2 hover:cursor-pointer hover:scale-105 transition hover:from-blue-800  duration-300 "
        >
          Login
        </button>
        <p className="text-center text-lg font-semibold text-red-500">{msgs}</p>
        <p>
          no tienes cuenta?{" "}
          <Link
            to={"/register"}
            className="text-blue-600 hover:underline hover:text-blue-800 duration-300 "
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
