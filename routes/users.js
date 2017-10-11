const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();
const db = require('../queries');

/* GET user profile. */
router.get('/users', ensureLoggedIn, db.getAllUsers);
// router.get('/users/:id', ensureLoggedIn, db.getUser);
// router.post('/users', db.createUser);

module.exports = router;
