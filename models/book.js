const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  image: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

const Book = mongoose.model('book', bookSchema)

module.exports = Book
