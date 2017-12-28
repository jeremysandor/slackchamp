CREATE TABLE users (
  ID SERIAL,
  USER_ID VARCHAR PRIMARY KEY,
  name VARCHAR,
  admin BOOLEAN
);


-- create products
CREATE TABLE games (
  ID SERIAL PRIMARY KEY,
  roadteam VARCHAR,
  hometeam VARCHAR,
  line REAL,
  total REAL,
  side VARCHAR,
  date TIMESTAMP
);



INSERT INTO users (user_id, name, admin)
  VALUES ('uuid345XYZ', 'Pete Becker', true);

INSERT INTO games (roadteam, hometeam, line, total, side, date) 
  VALUES ('CAL', 'Colorado', 4.5, null, 'CAL', '2004-10-19 10:23:54');





-- CREATE RELATED TABLES


-- CREATE TABLE users (
--   ID SERIAL,
--   USER_ID VARCHAR PRIMARY KEY,
--   name VARCHAR,
--   age INTEGER,
--   occupation VARCHAR
-- );


-- -- create products
-- CREATE TABLE products (
--   ID SERIAL PRIMARY KEY,
--   name VARCHAR,
--   user_id VARCHAR REFERENCES users
-- );



-- INSERT INTO users (user_id, name, age, occupation)
--   -- VALUES ('uuid123ABC', 'Tyler', 31, 'Dev');
--   VALUES ('uuid345XYZ', 'Jerome', 28, 'Dev');

-- INSERT INTO products (name, user_id) 
--   -- VALUES ('Shoe', 'uuid123ABC');
--   -- VALUES ('Sock', 'uuid123ABC');
--   VALUES ('Sandle', 'uuid345XYZ');
