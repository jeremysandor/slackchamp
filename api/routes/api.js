const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/api/login');
const router = express.Router();
const AppSession = require('../src/session');
const UserQueries = require('../src/user/queries');
const GameQueries = require('../src/games/queries');

/* GET user profile. */
const users = new UserQueries;
router.get('/users', users.getUsers.bind(users));
// router.get('/users', db.getAllUsers);
// router.get('/users', ensureLoggedIn, db.getAllUsers);
// router.get('/users/:id', ensureLoggedIn, db.getUser);
// router.post('/users', db.createUser);

const games = new GameQueries;
router.get('/games', games.getGames.bind(games));
router.get('/games/:id', games.getGame.bind(games));
router.post('/games', games.createGame.bind(games));
router.delete('/games/:id', games.deleteGame.bind(games));

// admin routes
router.get('/admin/games', ensureLoggedIn, games.getGames.bind(games));

// session 
const session = new AppSession;
router.get('/session', session.getSession.bind(session));

module.exports = router;
