// const pgp = require('pg-promise')();
const Postgres = require('../database/postgres');

class User extends Postgres {
  constructor() {
    super();
  }

  async getUsers(req, res, next) {
    try {
      const data = await super.getConnection().any('select * from users');
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
      const data = await super.getConnection().one('select * from users where id = $1', userID);
      res.status(200).json(data)
    } catch (e) {
      console.log('Error:', e)
      res.status(400)
    }
  }

  async createUser (req, res, next) {
    try {
      super.getConnection().none('insert into users(name, age, sex)' + 'values(${name}, ${age}, ${sex})', req.body)
      res.status(200).json(data)
    } catch (e) {
      console.log('Error:', e)
      res.status(400)
    }
  }  

}

module.exports = User;
