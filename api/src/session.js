class Session {
  constructor() {}

  async getSession(req, res, next) {
    console.log('REQ.session', req.session);
    
    let sessionObj = JSON.parse(JSON.stringify(req.session));
    
    // remove cookie obj - doing something weird on the front end
    console.log('sessionObj', typeof(sessionObj), sessionObj);
    // delete sessionObj.cookie;

    if (sessionObj.passport && sessionObj.passport.user) {
      sessionObj['loggedIn'] = true;
    }
    if (sessionObj.passport && sessionObj.passport.user && sessionObj.passport.user._json && sessionObj.passport.user._json['https://app.trustthehinkie.com/admin']) {
      sessionObj['admin'] = true;
    }
    // sessionObj = {'foo': 'bar', 'baz': 'wtf'}
    res.json(sessionObj);
  }
}

module.exports = Session;