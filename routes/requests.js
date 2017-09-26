const router = require('express-promise-router')()
const passport = require('passport')

require('../services/passport')
const RequestsController = require('../controllers/requests')
const passportJWT = passport.authenticate('jwt', { session: false })

router.route('/new')
  .post(passportJWT, RequestsController.new)

router.route('/me')
  .get(passportJWT, RequestsController.getUsersRequests)

router.route('/accept')
  .post(passportJWT, RequestsController.accept)

router.route('/decline')
  .delete(passportJWT, RequestsController.decline)

module.exports = router
