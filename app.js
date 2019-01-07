if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGOLAB_URI)

const app = express()

app.use(bodyParser.json())
// const corsOptions = {
//   origin: process.env.CLIENT_ORIGIN,
//   allowedHeaders: ['Accept-Version', 'Authorization', 'Credentials', 'Content-Type'],
//   exposedHeaders: ['Authorization']
// }

app.use(cors({ credentials: true, origin: true, exposedHeaders: ['Authorization'] }))

// app.all('*', cors(corsOptions))

// app.all('*', (req, res, next) => {
//   res.json('XDSDSDSD')
// })

app.use('/users', require('./routes/users'))
app.use('/books', require('./routes/books'))
app.use('/requests', require('./routes/requests'))

app.use(({ code, message }, req, res, next) => {
  console.log(message)
  res.status(400).json({ code, message })
})

const port = process.env.PORT || 3010
// console.log(port)
app.listen(port, () => console.log(`Server up on port ${port}!`))
