const JWT = require('jsonwebtoken')
const { pick } = require('lodash')

const User = require('../models/user')

const createToken = user =>
  JWT.sign({ sub: user._id }, process.env.JWT_SECRET)

module.exports = {
  signUp: async (req, res, next) => {
    const { username, password } = req.body

    const newUser = new User({ username, password })
    const user = pick(await newUser.save(), ['username', '_id'])
    const token = createToken(user)

    res.header('authorization', token).json(user)
  },

  logIn: async (req, res, next) => {
    const user = pick(req.user, ['username', '_id'])
    const token = createToken(user)

    res.header('authorization', token).json(user)
  }
}
