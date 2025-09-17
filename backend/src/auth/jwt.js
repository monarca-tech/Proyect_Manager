import jwt from "jsonwebtoken";
import { keyToken } from "../Config.js";

function createToken(payload) {
  try {
    const data = {
      id:payload.id,
      name: payload.name,
      email: payload.email,
    };

    const jwts = jwt.sign(data, keyToken, { expiresIn: "1d" });
    return jwts;
  } catch (erro) {
    console.log(erro);
  }
}

function verifiToken(req, res, next) {
  try {
    const token = req.cookies.token;
    // const token =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Imp1YW4iLCJlbWFpbCI6Imp1YW5AZ21haWwuY29tIiwiaWF0IjoxNzU3NDE5NTc0LCJleHAiOjE3NTc1MDU5NzR9.lbVZzlkSu1JbYTEnDePn5efDgO1P_KlqJd5wqsJGPiI'

    if (!token) return res.status(404).json({ erro: "Token no proveído" });

    jwt.verify(token, keyToken, (err, decode) => {
      if (err) return res.status(403).json({ error: "Token invalido" });
      req.user = decode;
      next();
    });
  } catch (erro) {
    console.log(erro);
  }
}

export { createToken, verifiToken };
