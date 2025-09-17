import bcrypt from "bcryptjs";

async function hastpassword(password) {
  return bcrypt.hash(password, 10);
}

async function comparehast(password, hastpassword) {
  return bcrypt.compare(password, hastpassword);
}

export { hastpassword, comparehast };
