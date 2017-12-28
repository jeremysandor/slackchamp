// const pgp = require('pg-promise')();
const Postgres = require('../database/postgres');

class Game extends Postgres {
  constructor() {
    super();
  }

  async getGames(req, res, next) {
    try {
      const data = await super.getConnection().any('select * from games');
      res.status(200).json(data)
    } catch (e) {
      res.status(400);
      res.json({ok: false, error: e.message});
    }    
  }

  async getGame (req, res, next) {
    const {id} = req.params;
    const gameId = parseInt(id);
    
    try {
      const data = await super.getConnection().one('select * from games where id = $1', gameId);
      res.status(200).json(data)
    } catch (e) {
      res.status(400);
      res.json({ok: false, error: e.message});
    }
  }

  async createGame (req, res, next) {
    console.log('req.body', req.body);
    try {
      const data = await super.getConnection().none('insert into games(roadteam, hometeam, line, total, side, date)' + 'values(${roadteam}, ${hometeam}, ${line}, ${total}, ${side}, ${date})', req.body)
      res.status(200).json(data)
    } catch (e) {
      res.status(400);
      res.json({ok: false, error: e.message});
    }
  }  

}

module.exports = Game;