const router = require('express-promise-router')()
const passport = require('passport')

require('../services/passport')
const UsersController = require('../controllers/users')

router.route('/signup')
  .post(UsersController.signUp)

router.route('/login')
  .post(passport.authenticate('local', { session: false }), UsersController.logIn)

module.exports = router
