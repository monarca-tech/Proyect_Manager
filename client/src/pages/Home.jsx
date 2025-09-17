// conponents
import { Link } from "react-router-dom";
import AddProyect from "../components/AddProyect";
import Card from "../components/Card";
import Input from "../components/Input";
import UpdateProyect from "../components/UpdateProyect";
// import Seletc from "../components/Seletc";

// ---
import { VscAdd } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";
import { Fade, Slide } from "react-awesome-reveal";
import { useContext } from "react";
import { Context } from "../context/auth";
import { Contextpost } from "../context/postContext";
//
function Home() {
  const { tokenVerifi } = useContext(Context);
  const { viewAddfun, viewadd, viewUP, setfilter, filterPost } =
    useContext(Contextpost);
  return (
    <div className="min-h-screen max-w-[80dvw]  mx-auto py-10">
      {viewadd ? <AddProyect /> : null}
      {viewUP ? <UpdateProyect /> : null}

      {/*  */}
      <Fade cascade duration={1000} triggerOnce damping={0.2}>
        {tokenVerifi ? (
          <div className=" absolute top-5 left-5">
            <div className="flex gap-4 items-center justify-center ">
              <Link
                to={"/userconfig"}
                className=" rounded-full max-w-[50px] max-h-[50px]"
              >
                <VscSettingsGear className=" max-w-[50px] max-h-[50px] hover:text-blue-500 transition-colors duration-300" />
              </Link>
              <h2>Config</h2>
            </div>
          </div>
        ) : (
          <div className=" absolute top-5 right-5">
            <div className="flex gap-4 items-center justify-center ">
              <Link
                to={"/login"}
                className="flex items-center justify-center px-3 py-1  bg-gradient-to-br from-blue-600 to-violet-600  cursor-pointer hover:scale-105 rounded-md text-slate-300 text-lg font-bold transition-transform duration-300"
              >
                Login
              </Link>

              <Link
                to={"/register"}
                className="flex items-center justify-center px-3 py-1  bg-gradient-to-br from-blue-600 to-violet-600  cursor-pointer hover:scale-105 rounded-md text-slate-300 text-lg font-bold transition-transform duration-300"
              >
                Register
              </Link>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <h1 className="max-sm:text-2xl text-4xl font-bold text-clip bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">
            Proyect Manager
          </h1>
          {tokenVerifi ? (
            <>
              <p className="max-sm:text-[15px] text-lg  ">
                Sistema profecional de gestion de proyecto de desarrollo web
              </p>
              <button
                onClick={() => {
                  viewAddfun();
                }}
                className="flex items-center justify-center px-3 py-2  bg-gradient-to-br from-blue-600 to-green-600 cursor-pointer hover:scale-105 rounded-md text-slate-300 text-lg font-bold transition-transform duration-300"
              >
                <VscAdd className="mr-1" /> New Proyect
              </button>
            </>
          ) : (
            <p className="max-sm:text-[15px] text-xl  ">
              debe registrarse para poder usar la app
            </p>
          )}
        </div>

        <div className=" flex  items-center justify-center gap-4 p-4">
          {tokenVerifi ? (
            <Input
              title="Buscar Proyecto..."
              onchange={setfilter}
              onkeyup={filterPost}
            />
          ) : (
            ""
          )}

          {/* select para filtrar por estado */}
          {/* <Seletc /> */}
        </div>
      </Fade>
      <Slide cascade duration={1000} triggerOnce>
        <Card />
      </Slide>
    </div>
  );
}

export default Home;
