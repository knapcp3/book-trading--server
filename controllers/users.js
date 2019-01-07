const JWT = require('jsonwebtoken')
const { pick } = require('lodash')

const User = require('../models/user')

const createToken = user =>
  JWT.sign({
    sub: user._id,
    exp: new Date().setDate(new Date().getDate() + 1)
  }, process.env.JWT_SECRET)

module.exports = {
  signUp: async (req, res, next) => {
    const { username, password } = req.body

    const newUser = new User({ username, password })
    const user = pick(await newUser.save(), ['username', '_id'])
    const token = createToken(user)

    // console.log(token)
    // res.set('Access-Control-Expose-Headers', 'Authorization')
    res.set('Authorization', token).json(user)
  },

  logIn: async (req, res, next) => {
    const user = pick(req.user, ['username', '_id'])
    const token = createToken(user)

    // res.set('Access-Control-Expose-Headers', 'Authorization')
    res.set('Authorization', token).json(user)
  }
}
