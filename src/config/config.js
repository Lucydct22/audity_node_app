const dotenv = require('dotenv')

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' })
} else {
  dotenv.config({ path: '.env.development' })
}

const ENV = process.env.NODE_ENV || 'development'

const CONFIG = {
  development: {
    app: {
      PORT: process.env.PORT_SERVER || 4003,
      API_VERSION: process.env.API_VERSION,
      PORT_MONGO_DB: process.env.PORT_MONGO_DB
    },
    db: {
      URL: `http://${process.env.IP_SERVER}:${process.env.PORT_SERVER}/api/${process.env.API_VERSION}`,
      MONGO_URL: `mongodb://${process.env.IP_SERVER}:${process.env.PORT_MONGO_DB}/${process.env.DB_NAME}`
    },
    auth0: {
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER
    }
  },
  production: {
    app: {
      PORT: process.env.PORT_SERVER || 4004,
      API_VERSION: process.env.API_VERSION,
      PORT_MONGO_DB: process.env.PORT_MONGO_DB
    },
    db: {
      URL: `http://${process.env.IP_SERVER}${process.env.PORT_SERVER}/api/${process.env.API_VERSION}`,
      MONGO_URL: `mongodb://${process.env.DB_USER_PASSWORD}@${process.env.IP_SERVER}:${process.env.PORT_MONGO_DB}/${process.env.DB_NAME}?authSource=admin`
    },
    auth0: {
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER
    }
  }
}

module.exports = CONFIG[ENV]