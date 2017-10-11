var pgp = require('pg-promise')();
// var connectionString = 'postgres://localhost:5432/slackchamp';
var connectionString = 'postgres://deploy@postgres/slackchamp';
var db = pgp(connectionString);

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize('postgres://deploy@postgres/slackchamp');



// add query functions
function getAllUsers(req, res, next) {
  console.log('req.user', req.user);
  db.any('select * from users')
    .then(function (data) {
      console.log('DATA', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

// function getAllUsers(req, res, next) {
//   // const User = sequelize.define('user', {
//   //   firstName: {
//   //     type: Sequelize.STRING
//   //   },
//   //   lastName: {
//   //     type: Sequelize.STRING
//   //   }
//   // });

//   // // force: true will drop the table if it already exists
//   // User.sync({force: false}).then(() => {
//   //   // Table created
//   //   return User.create({
//   //     firstName: 'John',
//   //     lastName: 'Hancock'
//   //   });
//   // });

//   User.findAll().then(users => {
//     console.log(users);
//     res.status(200);
//   })
// }

// function getUser(req, res, next) {
//   console.log('req.user', req.user);
//   userID = parseInt(req.params.id);
//   db.one('select * from users where id = $1', userID)
//     .then(function (data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved one user'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

// function createUser(req, res, next) {
//   console.log('CREATE USER req.body', req.body);
//   db.none('insert into users(name, age, sex)' + 'values(${name}, ${age}, ${sex})', req.body)
//     .then(function() {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Created user'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

module.exports = {
  getAllUsers: getAllUsers
  // getUser: getUser,
  // createUser: createUser
  // updateUser: updateUser,
  // removeUser: removeUser
};
