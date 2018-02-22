// const pgp = require('pg-promise')();
const Postgres = require('../database/postgres');

const moment = require('moment');

class Game extends Postgres {
  constructor() {
    super();
  }

  async getGames(req, res, next) {
    try {
      const qs = req.query;
      const now = moment(new Date());
      console.log('NOW', moment(new Date()));

      let query = 'select * from games ORDER BY date DESC'
      if (qs.gameTime === 'now') {
        query = `select * from games where date <= '${now}' ORDER BY date DESC`
      }
      
      const data = await super.getConnection().any(query);
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
      let {roadteam, hometeam, line, side, total, date} = req.body;
      if (line == '') {
        line = null;
      }
      if (total == '') {
        total = null;
      }
      const body = {
        roadteam: roadteam,
        hometeam: hometeam,
        line: line,
        side: side,
        total: total,
        date: date
      }
      console.log('BODY', body);
      const game = await super.getConnection().none('insert into games(roadteam, hometeam, line, total, side, date)' + 'values(${roadteam}, ${hometeam}, ${line}, ${total}, ${side}, ${date})', body);
      const data = await super.getConnection().any('select * from games ORDER BY date DESC');
      res.status(200).json(data)
    } catch (e) {
      res.status(400);
      res.json({ok: false, error: e.message});
    }
  }

  async deleteGame (req, res) {
    try {
      const {id} = req.params;
      const gameId = parseInt(id);

      const game = await super.getConnection().none('delete from games where id = $1', gameId);
      const data = await super.getConnection().any('select * from games ORDER BY date DESC');
      res.status(200).json(data);
    } catch (e) {
      res.status(400);
      res.json({ok: false, error: e.message});
    }

  }

}

module.exports = Game;

