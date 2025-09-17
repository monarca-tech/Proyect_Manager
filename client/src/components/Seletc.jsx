import { VscFilterFilled } from "react-icons/vsc";

function Seletc({ ...props }) {
  return (
    <div className="flex justify-center items-center">
      <VscFilterFilled className="mr-1"/>

      <select
        className=" bg-[#0b1018] text-white px-3 py-1.5 rounded-md outline-none border-b-1 border-transparent focus:border-blue-500 transition-colors duration-200 "
        onChange={(e) => {
          props.onchange(e.target.value);
        }}
      >
        <option value="all"></option>
        <option value="all">Todas</option>
        <option value="progress">En desarrollo</option>
        <option value="completed">Finalizado</option>
      </select>
    </div>
  );
}

export default Seletc;
