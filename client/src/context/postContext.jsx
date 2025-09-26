import { useReducer, createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "./auth";
import URLs from "./URLs";

const Contextpost = createContext();



function reduce(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state };
    case "success":
      return { ...state, data: action.payload };
    case "UpdateID":
      return { ...state, data: action.payload };
    case "delete":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    case "Add":
      return { ...state, data: [...state.data, action.payload] };
    case "update":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
  }
}


function ProvaiderPost({ children }) {
  const { Autenticado } = useContext(Context);

  const [state, dispacth] = useReducer(reduce, { data: [] });

  //
  const [title, settitle] = useState("");
  const [contents, setcontents] = useState("");
  const [tecnologia, settecnologia] = useState("");
  const [states, setstates] = useState("");

  //
  const [viewadd, setviewadd] = useState(false);
  const [viewUP, setviewUP] = useState(false);

  // id
  const [IDup, setIDup] = useState();
  // filter
  const [filter, setfilter] = useState();
  //
  const [numProyect, setnumProyect] = useState(0);

  useEffect(() => {
    if (Autenticado) {
      getPost();
    }
  }, [Autenticado]);

  function viewAddfun() {
    setviewadd(!viewadd);
  }

  function viewUPfun() {
    setviewUP(!viewUP);
  }

  // get all posts
  function getPost() {
    dispacth({ type: "loading" });

    fetch(`${URLs}/post/api/get_all_posts`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        dispacth({ type: "success", payload: data });
        setnumProyect(data.length);
      })
      .catch((error) => console.log(error));
  }

  // create post
  function createPost() {
    dispacth({ type: "loading" });
    fetch(`${URLs}/post/api/create_post`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        title,
        tecnologia,
        states,
        contents,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispacth({ type: "Add", payload: data });
      })
      .catch((error) => console.log(error));
  }

  // update id
  function UpdateID(id) {
    Updatewith(id);
    setIDup(id);
    viewUPfun();
  }

  // update with values post
  function Updatewith(id) {
    dispacth({ type: "loading" });
    const filter = state.data.filter((item) => item.id === id);
    settitle(filter[0].title);
    setcontents(filter[0].contents);
    settecnologia(filter[0].tecnologia);
    setstates(filter[0].states);
  }

  // Update
  function UpdatePost() {
    dispacth({ type: "loading" });
    fetch(`${URLs}/post/api/put_post/${IDup}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        contents: contents,
        tecnologia: tecnologia.toString(),
        states: states,
      }),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        dispacth({ type: "update", payload: data });
      })
      .catch((error) => console.log(error));
  }

  // filter
  function filterPost() {
    if (filter === "") {
      getPost();
    } else {
      fetch(`${URLs}/post/api/get_post/${filter}`, {
        credentials: "include",
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => dispacth({ type: "success", payload: data }));
    }
  }

  // delete post
  function deletePost(id) {
    dispacth({ type: "loading" });
    fetch(`${URLs}/post/api/delete_post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then(() => {
        dispacth({ type: "delete", payload: id });
      })
      .catch((error) => console.log(error));
  }

  const data = {
    setfilter,
    filterPost,
    createPost,
    setstates,
    setcontents,
    settecnologia,
    settitle,
    viewAddfun,
    viewadd,
    UpdateID,
    state,
    deletePost,
    viewUPfun,
    viewUP,
    UpdatePost,
    Updatewith,
    numProyect,

    //
    title,
    contents,
    tecnologia,
    states,
    //
    URLs,
  };
  return <Contextpost.Provider value={data}>{children}</Contextpost.Provider>;
}

export { ProvaiderPost, Contextpost };
