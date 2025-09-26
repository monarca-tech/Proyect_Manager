import express from "express";
import cors from "cors";
import cookiParse from "cookie-parser";
import dotenv from "dotenv";
// import { DT_hosting } from './Config.js'
const app = express();

// config
dotenv.config();
app.use(express.json());
app.use(
  cors({ origin: "https://proyectmanagers.netlify.app", credentials: true })
);
app.use(cookiParse());

app.get("/", (req, res) => res.send("welcome to the api infinecrip"));

// router
import router_user from "./router/user.router.js";
app.use("/user/api", router_user);
import router_post from "./router/post.router.js";
app.use("/post/api", router_post);
export default app;
