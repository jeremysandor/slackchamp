-- DROP DATABASE IF EXISTS slackchamp;
-- CREATE DATABASE slackchamp;

-- \c slackchamp;

CREATE TABLE users (
  ID SERIAL,
  USER_ID VARCHAR PRIMARY KEY,
  name VARCHAR,
  age INTEGER,
  occupation VARCHAR
);


-- create products
CREATE TABLE products (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  user_id VARCHAR REFERENCES users
);



INSERT INTO users (user_id, name, age, occupation)
  -- VALUES ('uuid123ABC', 'Tyler', 31, 'Dev');
  VALUES ('uuid345XYZ', 'Jerome', 28, 'Dev');

INSERT INTO products (name, user_id) 
  -- VALUES ('Shoe', 'uuid123ABC');
  -- VALUES ('Sock', 'uuid123ABC');
  VALUES ('Sandle', 'uuid345XYZ');
