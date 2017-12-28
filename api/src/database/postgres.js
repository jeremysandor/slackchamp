const pgp = require('pg-promise')();

class Postgres {
  constructor() {
    this.connectionString = 'postgres://deploy@postgres/slackchamp';
    this.db = pgp(this.connectionString);
  }

  getConnection() {
    return this.db;
  }
}

module.exports = Postgres