import { useContext } from "react";
import { Context } from "../context/auth";
function KEY() {
  const { viewKeyfun, setkey, delAcoum, msgs } = useContext(Context);
  return (
    <div className="w-[100%] h-screen left-0 bottom-0 z-20  absolute bg-slate-600/10 backdrop-blur-sm ">
      <div className="mt-30 mx-auto bg-[#0b1018] rounded-sm flex flex-col max-w-[500px] min-h-[300px] gap-6 p-3 text-slate-200 ">
        <button
          onClick={viewKeyfun}
          className="text-right text-red-500 text-2xl hover:cursor-pointer"
        >
          x
        </button>
        <h1 className="text-clip bg-clip-text text-transparent bg-gradient-to-br from-blue-700  to-green-700   text-2xl  font-semibold">
          Eliminar Usuario
        </h1>
        {/* key */}
        <div className="flex flex-col gap-1">
          <label htmlFor="key" className=" font-semibold">
            Desea Eliminar su usuario ?
          </label>
          <input
            onChange={(e) => {
              setkey(e.target.value);
            }}
            id="key"
            type="password"
            placeholder="password"
            className=" text-[18px] bg-[#0a0f16] text-white px-3 py-1.5 rounded-md outline-none border-1 border-slate-700 focus:border-blue-500 transition-colors duration-200 "
          />
        </div>

        <div className="flex gap-4">
          <button onClick={viewKeyfun} className="hover:cursor-pointer hover:bg-[#0e1722] transition-colors duration-200  max-w-[50%] w-[50%] border-1 border-slate-700 p-2">
            Cancelar
          </button>
          <button
            onClick={delAcoum}
            className="hover:cursor-pointer hover:from-red-600  transition-colors duration-200 bg-gradient-to-br max-w-[50%] w-[50%] from-blue-500 to-purple-700 p-2"
          >
            elimiar cuenta
          </button>
        </div>
        <p className="text-center text-lg font-semibold text-red-500">{msgs}</p>
      </div>
    </div>
  );
}

export default KEY;
