import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

import App from "./App";

import { AuthProvaider } from "./context/auth";
import { ProvaiderPost } from "./context/postContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <div className="text-slate-500 absolute bg-black/50 w-screen min-h-screen top-0 left-0 z-10">
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvaider>
          <ProvaiderPost>
              <App />
          </ProvaiderPost>
        </AuthProvaider>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
