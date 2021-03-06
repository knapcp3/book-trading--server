const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestSchema = new Schema({
  to: {
    _id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  from: {
    username: {
      type: String,
      required: true
    },
    _id: {
      type: Schema.Types.ObjectId,
      required: true
    }
  },
  book: {
    type: Schema.Types.ObjectId,
    required: true
  },
  createdAt: Date
})

requestSchema.pre('save', function (next) {
  this.createdAt = new Date().getTime()
  next()
})

const Request = mongoose.model('request', requestSchema)

module.exports = Request
