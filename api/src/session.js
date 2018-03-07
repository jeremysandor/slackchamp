class Session {
  constructor() {}

  async getSession(req, res, next) {
    let sessionObj = JSON.parse(JSON.stringify(req.session));
    
    if (sessionObj.passport && sessionObj.passport.user) {
      sessionObj['loggedIn'] = true;
    }
    if (sessionObj.passport && sessionObj.passport.user && sessionObj.passport.user._json && sessionObj.passport.user._json['https://app.trustthehinkie.com/admin']) {
      sessionObj['admin'] = true;
    }
    res.json(sessionObj);
  }
}

module.exports = Session;