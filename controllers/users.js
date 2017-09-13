const JWT = require('jsonwebtoken')

const User = require('../models/user')
const { JWT_SECRET } = require('../config')

const signToken = user => {
  return JWT.sign({ sub: user._id }, JWT_SECRET)
}

module.exports = {
  signUp: async (req, res, next) => {
    const { username, password } = req.body

    const newUser = new User({ username, password })
    const user = await newUser.save()
    const picked = (({ username, _id }) => ({ username, _id }))(user)

    const token = signToken(user)

    res.header('authorization', token).json(picked)
  },

  logIn: async (req, res, next) => {
    res.json({ ok: true })
  },

  secret: async (req, res, next) => {
    res.json({ ok: true })
  }
}
