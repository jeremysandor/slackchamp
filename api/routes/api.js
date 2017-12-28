const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();
const userQueries = require('../src/user/queries');
const gameQueries = require('../src/games/queries');

/* GET user profile. */
const users = new userQueries;
router.get('/users', users.getUsers.bind(users));
// router.get('/users', db.getAllUsers);
// router.get('/users', ensureLoggedIn, db.getAllUsers);
// router.get('/users/:id', ensureLoggedIn, db.getUser);
// router.post('/users', db.createUser);

const games = new gameQueries;
router.get('/games', games.getGames.bind(games));

module.exports = router;
