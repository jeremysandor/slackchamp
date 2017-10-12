-- DROP DATABASE IF EXISTS slackchamp;
-- CREATE DATABASE slackchamp;

-- \c slackchamp;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  age INTEGER,
  occupation VARCHAR
);


-- create products
CREATE TABLE products (
  ID SERIAL PRIMARY KEY,
  name VARCHAR
);

INSERT INTO users (name, age, occupation)
  VALUES ('Tyler', 31, 'Dev');

INSERT INTO products (name) 
  VALUES ('Shoe')
  