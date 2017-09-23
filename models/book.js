const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  image: String,
  ownerId: Schema.Types.ObjectId,
  ownerUsername: String
})

const Book = mongoose.model('book', bookSchema)

module.exports = Book
