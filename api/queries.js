const pgp = require('pg-promise')();

class Query {
  constructor(opts={}) {
    this.connectionString = 'postgres://deploy@postgres/slackchamp';
    this.db = pgp(this.connectionString);
  }

  async getAllUsers(req, res, next) {
    try {
      const data = await this.db.any('select * from users');
      res.status(200).json(data)
    } catch (e) {
      console.log('Error:', e)
      res.status(400)
    }    
  }

  async getUser (req, res, next) {
    const {id} = req.params;
    const userId = parseInt(id);
    
    try {
      const data = await this.db.one('select * from users where id = $1', userID);
      res.status(200).json(data)
    } catch (e) {
      console.log('Error:', e)
      res.status(400)
    }
  }

  async createUser (req, res, next) {
    try {
      this.db.none('insert into users(name, age, sex)' + 'values(${name}, ${age}, ${sex})', req.body)
      res.status(200).json(data)
    } catch (e) {
      console.log('Error:', e)
      res.status(400)
    }
  }  
  
}

module.exports = Query;
