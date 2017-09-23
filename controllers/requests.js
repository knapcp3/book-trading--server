const Request = require('../models/request')

module.exports = {
  new: async (req, res, next) => {
    const newRequest = new Request(req.body)

    const request = await newRequest.save()

    res.json(request)
  }
}
