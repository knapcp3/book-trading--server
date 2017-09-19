const router = require('express-promise-router')()
const passport = require('passport')

require('../services/passport')
const BooksController = require('../controllers/books')

router.route('/add')
  .post(passport.authenticate('jwt', { session: false }), BooksController.add)

module.exports = router
