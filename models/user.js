const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(this.password, salt)

    this.password = passwordHash
    next()
  } catch (error) {
    next(error)
  }
})

userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password)
  } catch (error) {
    throw new Error(error)
  }
}

const User = mongoose.model('user', userSchema)

module.exports = User
