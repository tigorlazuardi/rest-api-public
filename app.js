if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
const errorHandler = require('./middleware/errorHandler')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', routes)


app.use(errorHandler)

app.listen(port, () => console.log(`Listening on port ${port}`))