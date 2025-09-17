function Input({ ...props}) {
  return (
    <input
      
      className="min-w-[80%] w-[80%] bg-[#0b1018] text-white px-3 py-1.5 rounded-md outline-none border-b-1 border-transparent focus:border-blue-500 transition-colors duration-200 "
      placeholder={props.title}
      onChange={(e)=>{props.onchange(e.target.value)}}
      onKeyUp={()=>{props.onkeyup()}}
      
    />
  );
}

export default Input;
