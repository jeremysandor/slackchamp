const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();
const db = require('../queries');

/* GET user profile. */
const users = new db
router.get('/users', users.getAllUsers.bind(users));
// router.get('/users', db.getAllUsers);
// router.get('/users', ensureLoggedIn, db.getAllUsers);
// router.get('/users/:id', ensureLoggedIn, db.getUser);
// router.post('/users', db.createUser);

module.exports = router;




//     const agentController = new (require('./agent/controller'))(responseService);
//     app.post('/agent', authenticate, agentController.createAgentAction.bind(agentController));

    // const responseService = new (require('./components/response'))();
    // app.use(responseService.initialize.bind(responseService));