-- Active: 1751892124057@@127.0.0.1@5432@treke

CREATE TABLE if NOT exists users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    passwords VARCHAR(255) NOT NULL
);

CREATE Table IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    tecnologia TEXT [] NOT NULL DEFAULT '{}',
    states VARCHAR(255) NOT NULL DEFAULT 'not initial',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    user_id INTEGER,
    constraint fx_user Foreign Key (user_id) REFERENCES users (id) on delete CASCADE on update CASCADE
);

INSERT INTO users(name,email,passwords) VALUES('juan','cletos','kasdfkasfk3k2')

SELECT * from users

INSERT INTO posts(title,contents,tecnologia,states,user_id) VALUES('pato','kasjdklsakldfklasdfj',ARRAY['react','java'],'not initial',7)

SELECT * FROM posts

        UPDATE posts SET tecnologia = ARRAY['valor1', 'valor2', 'valor3'] WHERE id = 1;

SELECT users.id ,users.name , posts.user_id , posts.title FROM users  JOIN posts ON users.id = posts.user_id

SELECT * FROM posts WHERE (title ILIKE '%pato%' ) OR tecnologia @> array['react']::text[]
-- SELECT * FROM posts WHERE (title ILIKE '%a%' or contents ILIKE '% foo %') and tecnologia @> array['react']::text[]

DELETE FROM posts WHERE id =3

DELETE FROM posts WHERE id = 4 AND user_id = 5
-- DELETE FROM posts WHERE id = 4  AND user_id = 5

drop table public.posts CASCADE



DELETE  from public.posts WHERE id = 5
