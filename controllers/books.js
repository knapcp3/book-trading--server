const Book = require('../models/book')

module.exports = {
  add: async (req, res, next) => {
    // console.log(req.body)
    // console.log(req.user)
    const newBook = new Book(req.body)
    newBook.ownerId = req.user._id
    newBook.ownerUsername = req.user.username

    const { _id, title, ownerId, ownerUsername, author, image } = await newBook.save()

    res.json({ _id, title, ownerId, ownerUsername, author, image })
  },

  remove: async (req, res, next) => {
    const { _id } = req.body

    const book = await Book.findById(_id)

    if (!book) res.send()

    // if (req.user._id.toString() === book.owner.toString()) {
    //   throw new Error('Unauhorized')
    // }

    await book.remove()
    res.send()
  },

  getAll: async (req, res, next) => {
    // console.log('XDD')
    // res.json({books: [{'XD': 'XDDDD'}]})

    const books = await Book.find({}, { __v: 0 }).sort('-_id')

    res.json({ books })
  },

  getMine: async (req, res, next) => {
    const books = await Book.find({ owner: req.user._id }, { __v: 0 }).sort('-_id')

    res.json({ books })
  }
}
