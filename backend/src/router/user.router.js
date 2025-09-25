// express
import { Router } from "express";
import { verifiToken, createToken } from "../auth/jwt.js";
import { hastpassword, comparehast } from "../auth/password.js";
import pool from "../postgresql/postgres.js";
const router_user = Router();

const emailTest = /[a-z]+\@[a-z]+\.[a-z]/;
// register
router_user.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const passwords = await hastpassword(password);

    const { rows } = await pool.query("select * from users where email = $1", [
      email,
    ]);

    if (rows.length > 0) {
      return res.status(400).json({ msg: "El email ya esta registrado" });
    }

    if (name.length < 3 || !emailTest.test(email)) {
      console.log(emailTest.test(email));
      return res.status(400).json({
        msg: "Todos los campos son obligatorios o verifique sus datos",
      });
    }
    if (password.length < 7) {
      return res
        .status(400)
        .json({ msg: "la constraseña de ser mayor a 8 letras" });
    }

    await pool.query(
      "insert into users (name,email,passwords) values ($1,$2,$3)",
      [name, email, passwords]
    );
    return res.status(200).json({ msg: "Usuario creado exitosamente" });
  } catch (error) {
    console.log(error);
  }
});
// login
router_user.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!emailTest.test(email)) {
      return res.status(400).json({ msg: "verifique el email" });
    }
    if (password.length < 7) {
      return res
        .status(400)
        .json({ msg: "la constraseña de ser mayor a 8 letras" });
    }

    const { rows } = await pool.query("select * from users where email = $1", [
      email,
    ]);

    if (rows.length === 0) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }
    const user = rows[0];
    const isPassword = await comparehast(password, user.passwords);

    if (!isPassword) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }

    const token = createToken(user);

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: false,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .json({ msg: "Login successful", token: token });
  } catch (error) {
    console.log(error);
  }
});
// profile
router_user.get("/profile", verifiToken, (req, res) => {
  try {
    res.json(req.user);
  } catch (erro) {
    console.log(erro);
  }
});
// logout
router_user.post("/logout", verifiToken, (req, res) => {
  try {
    res.status(200).clearCookie("token").json({ message: "Logout successful" });
  } catch (erro) {
    console.log(erro);
  }
});
// delete account
router_user.delete("/delete_acum", verifiToken, async (req, res) => {
  try {
    const { key } = req.body;

    const { rows } = await pool.query("select * from users where id = $1", [
      req.user.id,
    ]);

    const userkey = rows[0];

    const password = await comparehast(key, userkey.passwords);

    if (!password) {
      return res.status(400).json({ msg: "Key incorrecta" });
    }
    await pool.query("delete from users where id = $1", [req.user.id]);
    res.status(200).json({ msg: "Cuenta eliminada" });
  } catch (erro) {
    console.log(erro);
  }
});

export default router_user;
