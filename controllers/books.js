const Book = require('../models/book')

module.exports = {
  add: async (req, res, next) => {
    const newBook = new Book(req.body)
    newBook.owner = req.user._id

    const { _id, title, owner, author, image } = await newBook.save()

    res.send({ _id, title, owner, author, image })
  }
}
