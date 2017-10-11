-- DROP DATABASE IF EXISTS slackchamp;
-- CREATE DATABASE slackchamp;

-- \c slackchamp;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO users (name, age, sex)
  VALUES ('Tyler', 31, 'M');