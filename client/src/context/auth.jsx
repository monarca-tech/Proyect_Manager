import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import URLs from "./URLs";
const Context = createContext();

function AuthProvaider({ children }) {
  //
  const navigation = useNavigate();


  const [Autenticado, setAutenticado] = useState(false);
  // login
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [password, setpassword] = useState();

  const [username, setusername] = useState();
  const [useremail, setuseremail] = useState();
  //

  const [viewKEY, setviewKEY] = useState();
  const [key, setkey] = useState();

  //
  const [msgs, setmsg] = useState("");
  //

  // register
  async function Register() {
    const res = await fetch(`${URLs}/user/api/register`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setmsg(data.msg);
    if (res.ok) {
      setmsg(data.msg + "el usuario sera redirigido en 1 segundo");
      setTimeout(() => {
        navigation("/login");
        setmsg("");
      }, 1000);
    } else {
      navigation("/register");
    }
    // return res;
  }

  async function Login() {
    const res = await fetch(`${URLs}/user/api/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      setmsg(data.msg + " sera redirigido a la pagina principal en 1 segundo");
      setTimeout(() => {
        navigation("/");
        setmsg("");
        navigation(0);
      }, 1000);
    } else {
      setmsg(data.msg);
    }
  }

  // profile
  function Profile() {
    fetch(`${URLs}/user/api/profile`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setusername(data.user.name);
        setuseremail(data.user.email);
        setAutenticado(data.autenticado)
      });
  }
  // logout

  async function Logout() {
    const res = await fetch(`${URLs}/user/api/logout`, {
      credentials: "include",
      method: "POST",
    });
    const data = await res.json();

    if (res.ok) {
      setTimeout(() => {
        navigation("/");
        setmsg("");
      }, 500);
    } else {
      setmsg(data.msg);
    }
  }

  // view key
  function viewKeyfun() {
    setviewKEY(!viewKEY);
  }

  async function delAcoum() {
    const ress = await fetch(`${URLs}/user/api/delete_acum`, {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({ key: key }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await ress.json();
    if (ress.ok) {
      setmsg(data.msg);
      setTimeout(() => {
        navigation("/");
        setmsg("");
        Logout();
      }, 1000);
    } else {
      setmsg(data.msg);
    }
  }

  useEffect(() => {
   
    Profile();
  }, [Autenticado]);

  const data = {
    setkey,
    setemail,
    setpassword,
    msgs,
    setname,
    Login,
    Register,
    Logout,
    username,
    useremail,
    delAcoum,
    Autenticado,
    viewKeyfun,
    viewKEY,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export { AuthProvaider, Context };
