const port = 3000;

const DB_user = process.env.DB_user || "noch";
const DB_host = process.env.DB_host || "localhost";
const DB_password = process.env.DB_password || "Codigo123#";
const DB_database = process.env.DB_database || "treke";
const DB_port = process.env.DB_port || 5432;
const DT_hosting = process.env.DT_hosting || "http://localhost:5173";

const keyToken = process.env.keyToken || "keytoken103"

export { port, DB_user, DB_host, DB_password, DB_database, DB_port ,DT_hosting,keyToken};
