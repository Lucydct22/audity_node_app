const express = require('express')
const config = require('./config/config')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const errorMiddleware = require('./middlewares/error.middleware')

// Routes
const userRoutes = require('./router/user.router')

app.use(cors({
	origin: ['http://localhost:3000', 'https://audity.dtpf.es']
}))
app.use(helmet())
app.use(`/api/${config.app.API_VERSION}`, userRoutes)
app.use(errorMiddleware)

module.exports = app;