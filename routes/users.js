const router = require('express-promise-router')()

const UsersController = require('../controllers/users')

router.route('/signup')
  .post(UsersController.signUp)

router.route('/login')
  .post(UsersController.logIn)

router.route('/secret')
  .get(UsersController.secret)

module.exports = router
