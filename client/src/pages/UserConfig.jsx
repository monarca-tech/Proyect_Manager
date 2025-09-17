import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";

import { useContext } from "react";
import { Context } from "../context/auth";
import { Contextpost } from "../context/postContext";

import KEY from "../components/KEY";

function UserConfig() {
  const { viewKeyfun, viewKEY, username, useremail, Logout } =
    useContext(Context);

  const { numProyect } = useContext(Contextpost);

  return (
    <div>
      <div className="max-sm:max-w-[90%] bg-[#0b1018]/40 h-screen max-w-[80%] mx-auto flex  flex-col justify-center  p-3 rounded-md">
        {viewKEY ? <KEY /> : null}
        <div className="flex items-center">
          <Link
            to={"/"}
            className=" max-sm:text-[10px] flex justify-center items-center text-slate-300 bg-gray-900 py-1 px-5 rounded-md hover:bg-gray-950 transition-colors duration-300 cursor-pointer"
          >
            <VscArrowLeft className="mr-2" /> volver al proyecto
          </Link>
        </div>
        <div className="gap-10 mt-10 flex flex-col ">
          <div className="max-sm:w-[80%] text-slate-300 flex flex-col gap-3 bg-gradient-to-br from-blue-500 to-slate-900 max-w-[100%] w-[25%] rounded-md p-3 ">
            <h1>username: {username}</h1>
            <strong>email: {useremail}</strong>
            <p>numero de proyecto: {numProyect}</p>
          </div>

          <div className="flex  items-center">
            <h2 className="text-[20px] font-semibold text-slate-200">temas</h2>
            <select className=" max-sm:text-[18px] bg-[#0b1018] text-slate-300 px-3 py-1.5 rounded-md outline-none border-b-1 border-transparent focus:border-blue-500 transition-colors duration-200 ">
              <option value="dart">dart</option>
              <option value="light">light</option>
            </select>
          </div>
          {/*  */}
          <div className="">
            <h2 className="text-slate-200 font-semibold text-[20px]">
              cunta de usuarios
            </h2>
            <div className="flex p-3 gap-2">
              <button
                onClick={() => {
                  Logout();
                }}
                className="text-slate-200 bg-gradient-to-br from-blue-500 to-violet-500 hover:from-blue-700 px-3 py-1.5 rounded-md outline-none cursor-pointer transition-colors duration-200 "
              >
                log out
              </button>
              <button
                onClick={() => {
                  viewKeyfun();
                }}
                className="text-slate-200 bg-gradient-to-br from-red-500 to-violet-700 hover:from-red-700 px-3 py-1.5 rounded-md outline-none cursor-pointer transition-colors duration-200 "
              >
                delete account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserConfig;
