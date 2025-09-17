import { Link } from "react-router-dom";
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { VscSymbolRuler } from "react-icons/vsc";
//  context
import { Contextpost } from "../context/postContext";
import { useContext } from "react";

function Card() {
  const { state ,deletePost,UpdateID} = useContext(Contextpost);


  return (
    <div className=" min-h-full h-full mt-7">
      {/* gird */}
      <div className="max-sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 max-sm:gap-5  ">
        {/* card */}

        {state.data.map((item, i) => (
          <div
            key={i}
            className="bg-[#181f2c] p-4 flex flex-col gap-4 rounded-[10px] justify-center shadow-lg shadow-blue-400/20 hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-[22px] font-bold text-slate-100 ">
              {item.title}
            </h1>
            <p className="px-3 bg-sky-600 max-w-[33%] text-slate-100 font-bold rounded-2xl py-0.5">
              {item.states}
            </p>
            <p className="font-semibold text-slate-400">{item.contents.slice(0,180)} ...</p>
            <h2 className="font-semibold text-[21px] text-slate-200">
              Tech Stack
            </h2>
            <div className="flex gap-2 flex-wrap ">
              {item.tecnologia.map((tech, i) => (
                <p
                  className="capitalize px-4 bg-sky-600 max-w-[30%] text-slate-200 font-bold rounded-2xl py-0.5"
                  key={i}
                >
                  {tech}
                </p>
              ))}
            </div>

            {/*  */}
            <div className="text-[13px] flex  gap-2 ">
              <Link
                className=" flex justify-center items-center text-center max-sm:w-[50%] hover:cursor-pointer hover:bg-slate-900 transition-colors duration-400 bg-slate-800 max-w-[60%] w-[60%] p-1.5 text-slate-200 font-bold rounded-lg "
                to={`/detail/${item.id}`}
              >
                <VscSymbolRuler className="mr-2" /> detail
              </Link>
              <button
                onClick={() => {
                  UpdateID(item.id);
                }}
                className=" hover:text-blue-500 flex justify-center items-center max-sm:w-[25%] hover:cursor-pointer hover:bg-slate-900 transition-colors duration-400 max-w-[25%] w-[25%] bg-slate-800 p-2 rounded-sm text-slate-300 font-semibold"
              >
                <VscEdit className="max-sm:mr-0 mr-2" /> edit
              </button>
              <button
                onClick={() => {
                  deletePost(item.id);
                }}
                className=" hover:text-red-500 flex justify-center items-center max-sm:w-[25%] hover:cursor-pointer hover:bg-slate-900 transition-colors duration-400 max-w-[25%] w-[25%] bg-slate-800 p-2 rounded-sm text-slate-300 font-semibold"
              >
                <VscTrash className="max-sm:mr-0 mr-2 " /> del
              </button>
            </div>
          </div>
        ))}

        {/* card */}
      </div>
    </div>
  );
}
        // <div className="bg-[#181f2c] p-4 flex flex-col gap-4 rounded-[10px] justify-center shadow-lg shadow-blue-400/20 hover:scale-105 transition-transform duration-300">
        //   <h1 className="text-[22px] font-bold text-slate-100 ">title</h1>
        //   <p className="px-3 bg-sky-600 max-w-[25%] text-slate-100 font-bold rounded-2xl py-0.5">
        //     state
        //   </p>
        //   <p className="font-semibold text-slate-400">detail</p>
        //   <h2 className="font-semibold text-[21px] text-slate-200">
        //     Tech Stack
        //   </h2>
        //   <div className="flex gap-2 flex-wrap ">
        //     <p className="px-4 bg-sky-600 max-w-[30%] text-slate-100 font-bold rounded-2xl py-0.5">
        //       state
        //     </p>
        //   </div>
        //   {/*  */}
        //   <div className="text-[13px] flex  gap-2 ">
        //     <Link
        //       className=" flex justify-center items-center text-center max-sm:w-[50%] hover:cursor-pointer hover:bg-slate-900 transition-colors duration-400 bg-slate-800 max-w-[60%] w-[60%] p-1.5 text-slate-200 font-bold rounded-lg "
        //       to={`/detail/1`}
        //     >
        //       <VscSymbolRuler className="mr-2" /> detail
        //     </Link>
        //     <button className=" hover:text-blue-500 flex justify-center items-center max-sm:w-[25%] hover:cursor-pointer hover:bg-slate-900 transition-colors duration-400 max-w-[25%] w-[25%] bg-slate-800 p-2 rounded-sm text-slate-300 font-semibold">
        //       <VscEdit className="max-sm:mr-0 mr-2" /> edit
        //     </button>
        //     <button className=" hover:text-red-500 flex justify-center items-center max-sm:w-[25%] hover:cursor-pointer hover:bg-slate-900 transition-colors duration-400 max-w-[25%] w-[25%] bg-slate-800 p-2 rounded-sm text-slate-300 font-semibold">
        //       <VscTrash className="max-sm:mr-0 mr-2 " /> del
        //     </button>
        //   </div>
        // </div>

export default Card;
