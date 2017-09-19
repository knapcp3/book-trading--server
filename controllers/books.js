const Book = require('../models/book')

module.exports = {
  add: async (req, res, next) => {
    const newBook = new Book(req.body)
    newBook.owner = req.user._id

    const { _id, title, owner, author, image } = await newBook.save()

    res.json({ _id, title, owner, author, image })
  },

  remove: async (req, res, next) => {
    const { _id } = req.body

    const book = await Book.findById(_id)

    if (!book) res.send()

    if (req.user._id.toString() === book.owner.toString()) {
      throw new Error('Unauthorized')
    }

    await book.remove()
    res.send()
  },

  getAll: async (req, res, next) => {
    const books = await Book.find({}, { __v: 0 }).sort('-_id')

    res.json({ books })
  },

  getMine: async (req, res, next) => {
    const books = await Book.find({ owner: req.user._id }, { __v: 0 }).sort('-_id')

    res.json({ books })
  }
}
