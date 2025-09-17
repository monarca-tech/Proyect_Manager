import { useContext } from "react";
import { Contextpost } from "../context/postContext";


function UpdateProyect() {
  const {
    viewUPfun,
    UpdatePost,
    setstates,
    setcontents,
    settecnologia,
    settitle,
    title,
    contents,
    tecnologia,
    states,
  } = useContext(Contextpost);

  return (
    <div className="w-[100%] h-screen left-0 bottom-0 z-20  absolute bg-slate-600/10 backdrop-blur-sm ">
      <div className="mt-6 mx-auto bg-[#0b1018] rounded-sm flex flex-col max-w-[500px] min-h-[400px] gap-6 p-3 text-slate-200 ">
        <button
          onClick={()=>{
            viewUPfun()
          }}
          className="text-right text-red-500 text-2xl hover:cursor-pointer"
        >
          x
        </button>
        <h1 className="text-clip bg-clip-text text-transparent bg-gradient-to-br from-blue-700  to-green-700   text-2xl  font-semibold">
          Update Proyect
        </h1>
        {/* title */}
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className=" font-semibold">
            Titulo del Proyecto
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            placeholder="Nombre del proyecto"
            className=" text-[18px] bg-[#0a0f16] text-white px-3 py-1.5 rounded-md outline-none border-1 border-slate-700 focus:border-blue-500 transition-colors duration-200 "
          />
        </div>
        {/* description */}
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className=" font-semibold">
            description
          </label>
          <textarea
            type="text"
            value={contents}
            onChange={(e) => {
              setcontents(e.target.value);
            }}
            placeholder="description"
            id="description"
            rows={4}
            className=" text-[15px] bg-[#0a0f16] text-slate-300 px-3 py-1.5 rounded-md outline-none border-1 border-slate-700 focus:border-blue-500 transition-colors duration-200 "
          />
        </div>
        {/* state */}
        <div className="flex flex-col gap-1">
          <label htmlFor="state" className=" font-semibold">
            Estado del Proyecto
          </label>
          <select
            value={states}
            onChange={(e) => {
              setstates(e.target.value);
            }}
            className=" bg-[#0b1018] border-1 border-slate-700 text-white px-3 py-1.5 rounded-md outline-none  focus:border-blue-500 transition-colors duration-200 "
            id="state"
          >
            <option value="not initial">not initial</option>
            <option value="in progress">in progress</option>
            <option value="complete">complete</option>
          </select>
        </div>
        {/* tech */}
        <div className="flex flex-col gap-1">
          <label htmlFor="tech" className=" font-semibold">
            Stack Tecnologico
          </label>
          <input
            type="text"
            id="tech"
            value={tecnologia}
            onChange={(e) => {
              settecnologia(e.target.value);
            }}
            placeholder="Reac, typescript, node.js..."
            className=" text-[18px] bg-[#0a0f16] text-white px-3 py-1.5 rounded-md outline-none border-1 border-slate-700 focus:border-blue-500 transition-colors duration-200 "
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={viewUPfun}
            className="hover:cursor-pointer hover:bg-[#0e1722] transition-colors duration-200  max-w-[50%] w-[50%] border-1 border-slate-700 p-2"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              UpdatePost();
              setTimeout(() => {
                viewUPfun();
              }, 200);
            }}
            className="hover:cursor-pointer hover:from-blue-600  transition-colors duration-200 bg-gradient-to-br max-w-[50%] w-[50%] from-blue-500 to-purple-700 p-2"
          >
            Update Proyect
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProyect;
