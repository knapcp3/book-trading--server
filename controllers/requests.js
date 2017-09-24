const Request = require('../models/request')

module.exports = {
  new: async (req, res, next) => {
    if (req.body.to._id === req.body.from._id) {
      throw new Error('You own this book.')
    }

    const newRequest = new Request(req.body)

    const request = await newRequest.save()

    res.json(request)
  },
  getUsersRequests: async (req, res, next) => {
    const requests = await Request.find({ $or: [
      { 'to._id': req.user._id },
      { 'from._id': req.user._id }
    ] })

    requests ? res.json(requests) : res.json([])
  }
}
