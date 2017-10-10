const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();

/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  console.log('REQ USER', req.user);
  res.render('user', {
    user: req.user
  });
});

module.exports = router;
