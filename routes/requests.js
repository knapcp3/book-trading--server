const router = require('express-promise-router')()
const passport = require('passport')

require('../services/passport')
const RequestsController = require('../controllers/books')
const passportJWT = passport.authenticate('jwt', { session: false })

router.route('/new')
  .post(passportJWT, RequestsController.new)

module.exports = router
