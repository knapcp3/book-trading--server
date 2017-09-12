const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20
  }
})

const User = mongoose.model('user', userSchema)

module.exports = User
