const pgp = require('pg-promise')();
const connectionString = 'postgres://deploy@postgres/slackchamp';
const db = pgp(connectionString);

class Postgres {
  constructor() {}

  getConnection() {
    return db;
  }
}

module.exports = Postgres