class Session {
  constructor() {}

  async getSession(req, res, next) {
    res.json(req.session);
  }
}

module.exports = Session;