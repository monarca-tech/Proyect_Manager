import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";

import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { Fade } from "react-awesome-reveal";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useContext } from "react";
import { Contextpost } from "../context/postContext";
import { useNavigate } from "react-router-dom";

import UpdateProyect from "../components/UpdateProyect";

function Detail() {
  const { deletePost, viewUPfun, viewUP, UpdateID, URLs } =
    useContext(Contextpost);
  const navigation = useNavigate();
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  console.log(id);

  async function dataDetail() {
    return fetch(`${URLs}/post/api/get_post_id/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }

  useEffect(() => {
    dataDetail();
  }, [id]);

  return (
    <div>
      {viewUP ? <UpdateProyect /> : null}
      <Fade cascade duration={1500} triggerOnce damping={0.4}>
        {datas.map((item, index) => (
          <div key={index} className="max-w-[80%] mx-auto ">
            <div className="mt-5 flex flex-col gap-5">
              <div className="flex max-sm:flex-col p-6 gap-5 bg-gray-900/20 justify-center shadow-md shadow-purple-500/20">
                <div className="flex items-center">
                  <Link
                    to={"/"}
                    className=" max-sm:text-[10px] flex justify-center items-center text-slate-300 bg-gray-900 py-1 px-5 rounded-md hover:bg-gray-950 transition-colors duration-300 cursor-pointer"
                  >
                    <VscArrowLeft className="mr-2" /> volver al proyecto
                  </Link>
                </div>

                <div className="ml-2">
                  <h1 className="text-2xl max-sm:text-[20px] font-bold text-blue-500">
                    {item.title}
                  </h1>
                  <div className="flex max-sm:flex-col max-sm:py-2 max-sm:gap-2 py-3 gap-4 items-center ">
                    <p className="px-4 bg-sky-600 max-w-[30%] text-slate-100 font-bold rounded-2xl py-0.5">
                      state
                    </p>
                    <p className="text-slate-500">
                      creado el {Date(item.created_at).slice(3, 15)}
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    viewUPfun();
                    UpdateID(item.id);
                  }}
                  className=" flex  max-sm:gap-3 gap-4 items-center ml-4"
                >
                  <button className="hover:text-blue-400 flex justify-center items-center  max-sm:px-1 max-sm:py-1 text-slate-200 font-semibold bg-gradient-to-tl from-sky-500 to-violet-700 hover:from-sky-700 px-3 py-1.5 rounded-md  cursor-pointer transition-colors duration-200">
                    <VscEdit /> editar proyecto
                  </button>
                  <button
                    onClick={() => {
                      deletePost(item.id);
                      navigation("/");
                    }}
                    className=" hover:text-red-700 duration-300 flex justify-center items-center bg-gradient-to-tl from-red-500 to-violet-500 px-3 p-1.5 rounded-md cursor-pointer transition-colors text-slate-200 font-semibold hover:from-red-700"
                  >
                    <VscTrash /> eliminar
                  </button>
                </div>
              </div>
              {/* descripcion */}
              <div className="flex flex-col gap-4 p-8 bg-slate-950/30 justify-center shadow-md shadow-blue-500/20">
                <h1 className="max-sm:text-[17px] text-slate-200 font-semibold text-2xl ">
                  descripcion
                </h1>
                <p className=" whitespace-pre-line text-slate-400 ">
                  {item.contents}
                </p>
              </div>
              {/* stack tecnologico */}
              <div className="flex flex-col gap-4 p-8 bg-slate-950/30 justify-center shadow-md shadow-blue-500/20">
                <h1 className="max-sm:text-[17px] text-slate-200 font-semibold text-2xl ">
                  Stack Tecnologico
                </h1>
                <div className="flex gap-5 flex-wrap">
                  {item.tecnologia.map((stack, i) => (
                    <p
                      key={i}
                      className="px-4 bg-sky-600 max-w-[30%] text-slate-100 font-bold rounded-2xl py-0.5"
                    >
                      {stack}
                    </p>
                  ))}
                </div>
              </div>
              {/* informacion del proyecto */}
              <div className="flex flex-col gap-4 p-8 bg-slate-950/30 justify-center shadow-md shadow-purple-500/20">
                <h1 className="max-sm:text-[17px] text-slate-200 font-semibold text-2xl ">
                  Informaicon del Proyecto
                </h1>
                {/*  */}
                <div className="flex gap-6 justify-around">
                  <div className="flex gap-10 flex-col">
                    <div className="flex flex-col gap-3 ">
                      <h2 className="text-slate-300">Estado Actual</h2>
                      <p className="px-4 bg-sky-600 max-w-[60%] text-slate-100 font-bold rounded-2xl py-0.5">
                        {item.states}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 ">
                      <h2 className="text-slate-300">Creacion del Proyecto</h2>
                      <p className="text-slate-500">
                        creado el {Date(item.created_at).slice(3, 15)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-10 flex-col">

                    <div className="flex flex-col gap-3 ">
                      <h2 className="text-slate-300">
                        ultima Actualizacion de {item.title}
                      </h2>
                      <p className="text-slate-500">
                        actualizado el {Date(item.updated_at).slice(3,15)}
                      </p>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
              {/*  */}
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Detail;
