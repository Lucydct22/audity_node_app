const express = require('express')
const config = require('./config/config')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const errorMiddleware = require('./middlewares/error.middleware')
const fileUpload = require('express-fileupload')
// Routes
const userRoutes = require('./router/user.router')
const genreRoutes = require('./router/genre.router')
const playlistRoutes = require('./router/playlist.router')
const albumRoutes = require('./router/album.router')
const artistRoutes = require('./router/artist.router')
const trackRoutes = require('./router/track.router')
const musicRoutes = require('./router/music.router')
const statisticRoutes = require('./router/statistic.router')

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5100', 'https://audity.dtpf.es']
}))
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
    limits: { fileSize: 15000000 }, // 15MB max file(s) size
    abortOnLimit: true // default: false (if true, files will not be uploaded and an error event will be emitted)
  })
)
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [
        "'self'",
        "https://dev-yxiaxoiu73blg7k8.us.auth0.com",
        "https://lh3.googleusercontent.com",
      ],
      objectSrc: ["'none'"],
      scriptSrc: ["'self'", "https://www.googletagmanager.com", "https: 'unsafe-inline'"],
      styleSrc: ["'self'", "https: 'unsafe-inline'"],
      connectSrc: [
        "'self'",
        "https://dev-yxiaxoiu73blg7k8.us.auth0.com/oauth/token",
        "https://region1.google-analytics.com"
      ],
      "img-src": ["'self'", "https: data:"],
      upgradeInsecureRequests: [],
    },
  },
}))
app.use((req, res, next) => {
  res.header("Cross-Origin-Embedder-Policy", "cross-origin")
  next()
})
app.use(`/api/${config.app.API_VERSION}`, userRoutes)
app.use(`/api/${config.app.API_VERSION}`, genreRoutes)
app.use(`/api/${config.app.API_VERSION}`, playlistRoutes)
app.use(`/api/${config.app.API_VERSION}`, albumRoutes)
app.use(`/api/${config.app.API_VERSION}`, artistRoutes)
app.use(`/api/${config.app.API_VERSION}`, trackRoutes)
app.use(`/api/${config.app.API_VERSION}`, musicRoutes)
app.use(`/api/${config.app.API_VERSION}`, statisticRoutes)
app.use(errorMiddleware)

module.exports = app;