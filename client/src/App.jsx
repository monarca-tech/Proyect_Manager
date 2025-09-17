// pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserConfig from "./pages/UserConfig";
// ---
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userconfig" element={<UserConfig />}></Route>
    </Routes>
  );
}

export default App ;
