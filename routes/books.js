const router = require('express-promise-router')()
const passport = require('passport')

require('../services/passport')
const BooksController = require('../controllers/books')
const passportJWT = passport.authenticate('jwt', { session: false })

router.route('/add')
  .post(passportJWT, BooksController.add)

router.route('/remove')
  .delete(passportJWT, BooksController.remove)

module.exports = router
