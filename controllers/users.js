const User = require('../models/user')

module.exports = {
  signUp: async (req, res, next) => {
    const { username, password } = req.body

    const newUser = new User({ username, password })
    const user = await newUser.save()
    const picked = (({ username, _id }) => ({ username, _id }))(user)

    res.json(user)
  },

  logIn: async (req, res, next) => {
    res.json({ ok: true })
  },

  secret: async (req, res, next) => {
    res.json({ ok: true })
  }
}
