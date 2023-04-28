const express = require('express')
const config = require('./config/config')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const errorMiddleware = require('./middlewares/error.middleware')

// Routes
const userRoutes = require('./router/user.router')
const genreRoutes = require('./router/genre.router')
const playlistRoutes = require('./router/playlist.router')

app.use(express.json())
app.use(cors({
	origin: ['http://localhost:5100', 'https://audity.dtpf.es']
}))
app.use(helmet())
app.use(`/api/${config.app.API_VERSION}`, userRoutes)
app.use(`/api/${config.app.API_VERSION}`, genreRoutes)
app.use(`/api/${config.app.API_VERSION}`, playlistRoutes)
app.use(errorMiddleware)

module.exports = app;