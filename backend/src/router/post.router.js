import { Router } from "express";
import { verifiToken } from "../auth/jwt.js";
import pool from "../postgresql/postgres.js";

const router_post = Router();

// create post
router_post.post("/create_post", verifiToken, async (req, res) => {
  try {
    const { title, contents, tecnologia, states } = req.body;
    const tecnologia_array = tecnologia
      .replaceAll(" ", "")
      .replace(/,/g, " ")
      .split(" ");

    const { id } = req.user;

    const sql =
      "INSERT INTO public.posts (title, contents, tecnologia, states, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [title, contents, tecnologia_array, states, id];

    const result = await pool.query(sql, values);
    res.json(result.rows[0]);
  } catch (erro) {
    console.log(erro);
  }
});
// get all posts

router_post.get("/get_all_posts", verifiToken, async (req, res) => {
  try {
    const sql = "SELECT * FROM posts where user_id = $1";
    const result = await pool.query(sql, [req.user.id]);
    res.json(result.rows);
  } catch (erro) {
    console.log(erro);
  }
});

// delete post of user
router_post.delete("/delete_post/:id", verifiToken, async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.user.id;
    const { rows } = await pool.query(
      "DELETE FROM posts WHERE id = $1 AND user_id = $2 returning *",
      [id, user_id]
    );
    res.json(rows);
  } catch (erro) {
    console.log(erro);
  }
});

// get post by search term
router_post.get("/get_post/:search", verifiToken, async (req, res) => {
  // `SELECT * FROM posts WHERE (title ILIKE $1 OR contents ILIKE $1) and user_id = $2`,

  try {
    const { search } = req.params;
    const { rows } = await pool.query(
      `SELECT * FROM posts WHERE (title ILIKE $1) and user_id = $2`,
      [`%${search}%`, req.user.id]
    );

    res.json(rows);
  } catch (erro) {
    console.log(erro);
  }
});
// get post for id
router_post.get("/get_post_id/:id", verifiToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      `SELECT * FROM posts WHERE id = $1 and user_id = $2`,
      [id, req.user.id]
    );

    res.json(rows);
  } catch (erro) {
    console.log(erro);
  }
});

// update post of user by id
router_post.put("/put_post/:id", verifiToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, contents, tecnologia, states } = req.body;
    //
    const user_id = req.user.id;
    //;
    const tecnologia_array = tecnologia
      .replaceAll(" ", "")
      .replace(/,/g, " ")
      .split(" ");
    
    const date = new Date().toLocaleDateString()

    const sql = `UPDATE posts SET title=coalesce($1,title),contents = coalesce($2, contents),tecnologia= $3, states = $4 , updated_at = $5 WHERE id=$6 and user_id=$7  returning *`;
    //
    const values = [title, contents, [...tecnologia_array], states, date, id, user_id];
    const result = await pool.query(sql, values);

    res.json(result.rows[0]);
  } catch (erro) {
    console.log(erro);
  }
});

export default router_post;
