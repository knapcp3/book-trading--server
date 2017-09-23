const Request = require('../models/request')

module.exports = {
  new: async (req, res, next) => {
    const newRequest = new Request(req.body)

    const request = await newRequest.save()

    res.json(request)
  },
  getUsersRequests: async (req, res, next) => {
    const { data: requests } = await Request.find({ 'to._id': req.user._id })

    requests ? res.json(requests) : res.json([])
  }
}
