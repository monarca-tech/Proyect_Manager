import pg from 'pg'
import {DB_user, DB_host, DB_password, DB_database, DB_port } from '../Config.js'

const pool = new pg.Pool({
    user:DB_user,
    port:DB_port,
    database:DB_database,
    password:DB_password,
    host:DB_host
})

export default pool