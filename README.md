# Audity - Backend API

REST API backend for **Audity**, a music streaming web platform. Built with Node.js, Express, and MongoDB.

**Live**: https://audity.dtpf.es/

## Tech Stack

- **Runtime**: Node.js (JavaScript, CommonJS)
- **Framework**: Express 4
- **Database**: MongoDB with Mongoose 7
- **Authentication**: Auth0 JWT via `express-oauth2-jwt-bearer`
- **Media Storage**: Cloudinary (images and audio)
- **File Uploads**: express-fileupload (15MB limit)
- **Security**: Helmet with custom CSP

## Prerequisites

- Node.js (v16+)
- MongoDB instance running locally (default port 27017)
- Auth0 tenant configured
- Cloudinary account

## Installation

```bash
git clone https://github.com/Lucydct22/audity_node_app.git
cd audity_node_app
npm install
```

## Environment Setup

Create `.env.development` and `.env.production` files based on the provided examples:

```bash
cp .env.development.example .env.development
cp .env.production.example .env.production
```

### Development Environment Variables

| Variable | Description | Example |
|---|---|---|
| `API_VERSION` | API version prefix | `v1` |
| `IP_SERVER` | Server hostname | `localhost` |
| `PORT_MONGO_DB` | MongoDB port | `27017` |
| `DB_NAME` | MongoDB database name | `audity-development` |
| `PORT_SERVER` | Express server port | `4000` |
| `AUTH0_AUDIENCE` | Auth0 API audience | `http://localhost:4000` |
| `AUTH0_ISSUER` | Auth0 issuer URL | `https://your-tenant.us.auth0.com/` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | |
| `CLOUDINARY_API_KEY` | Cloudinary API key | |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | |

Production additionally requires `DB_USER_PASSWORD` for authenticated MongoDB connections.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with nodemon (port 4000) |
| `npm start` | Start production server |

## API Endpoints

All endpoints are prefixed with `/api/v1/`.

### Albums

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/albums` | - | Get all albums |
| GET | `/album/:albumId` | - | Get album by ID |
| POST | `/album` | Admin | Create album |
| PUT | `/album/:albumId` | Admin | Update album |
| DELETE | `/album/:albumId` | Admin | Delete album |
| PUT | `/album-image/:albumId` | Admin | Update album cover image |
| GET | `/albums-liked-by-user/:userId` | User | Get albums liked by user |
| GET | `/like-dislike-album/:albumId/:userId` | User | Toggle like/dislike on album |

### Artists

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/artists` | - | Get all artists |
| GET | `/artist/:artistId` | - | Get artist by ID |
| POST | `/artist` | Admin | Create artist |
| PUT | `/artist/:artistId` | Admin | Update artist |
| DELETE | `/artist/:artistId` | Admin | Delete artist |
| PUT | `/artist-image/:artistId` | Admin | Update artist image |
| GET | `/artists-liked-by-user/:userId` | User | Get artists liked by user |
| GET | `/like-dislike-artist/:artistId/:userId` | User | Toggle like/dislike on artist |

### Tracks

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/tracks` | - | Get all tracks |
| GET | `/track/:trackId` | - | Get track by ID |
| GET | `/random-track` | - | Get a random track |
| POST | `/track` | Admin | Create track (public) |
| POST | `/track-private` | User | Upload private track |
| PUT | `/track/:trackId` | Admin | Update track |
| DELETE | `/track/:trackId` | Admin | Delete track |
| PUT | `/track-image/:trackId` | Admin | Update track cover image |
| PUT | `/track-audio/:trackId` | User | Update track audio file |
| GET | `/tracks-liked-by-user/:userId` | User | Get tracks liked by user |
| GET | `/like-dislike-track/:trackId/:userId` | User | Toggle like/dislike on track |
| GET | `/tracks-private/:userId` | User | Get user's private tracks |

### Genres

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/genres` | - | Get all genres |
| GET | `/genre/:id` | - | Get genre by ID |
| GET | `/genre/:id/playlists` | - | Get playlists with genre |
| GET | `/genre/:id/albums` | - | Get albums with genre |
| GET | `/genre/:id/artists` | - | Get artists with genre |
| POST | `/genre` | Admin | Create genre |
| PUT | `/update-genre/:id` | Admin | Update genre |
| DELETE | `/delete-genre/:id` | Admin | Delete genre |
| PUT | `/genre-image/:genreId` | Admin | Update genre cover image |

### Playlists

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/playlists` | - | Get all public playlists |
| GET | `/playlist/:id` | - | Get playlist by ID |
| POST | `/playlist` | User | Create private playlist |
| PUT | `/update-playlist/:id` | User | Update playlist |
| DELETE | `/playlist/:playlistId` | User | Delete playlist |
| GET | `/playlists-liked-by-user/:userId` | User | Get playlists liked by user |
| GET | `/like-dislike-playlist/:playlistId/:userId` | User | Toggle like/dislike on playlist |
| GET | `/playlists-by-user/:userId` | User | Get playlists owned by user |
| PUT | `/playlist-add-track/playlists/:playlistId/tracks/:trackId` | User | Add track to playlist |
| DELETE | `/delete-track-from-playlist/playlists/:playlistId/tracks/:trackId` | User | Remove track from playlist |
| POST | `/playlist-admin` | Admin | Create public playlist |
| PUT | `/playlist-admin/:playlistId` | Admin | Update playlist (admin) |
| PUT | `/playlist-image/:playlistId` | Admin | Update playlist cover image |
| PUT | `/update-public-accessible/:playlistId` | Admin | Toggle public/private |
| GET | `/all-playlists` | Admin | Get all playlists (including private) |

### Users

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/register-login-user` | User | Register or login user |
| PUT | `/update-user-settings` | User | Update user settings |
| PUT | `/update-user-language` | User | Update user language preference |
| PUT | `/update-user-country` | User | Update user country |
| PUT | `/update-user-info` | User | Update user info |
| GET | `/user-role` | User | Get current user's role |
| PUT | `/user-role/:userId` | Admin | Update a user's role |
| DELETE | `/delete-user/:userId` | Admin | Delete a user |
| GET | `/users` | Admin | Get all users |

### Statistics

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/statistic` | Admin | Create statistic record |
| GET | `/statistics` | Admin | Get all statistics |
| PUT | `/update-total-tracks-played` | - | Increment total tracks played |
| PUT | `/report-errored-track/:trackId` | - | Report a broken track |
| PUT | `/remove-report-errored-track/:trackId` | Admin | Remove error report from track |

### Search

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/search-content/:query` | - | Search across tracks, albums, artists, playlists |

**Auth legend**: `-` = public, `User` = requires JWT, `Admin` = requires JWT + admin role.

## Project Structure

```
src/
  config/config.js         # Environment-aware configuration
  controllers/             # Route handlers per resource
    utils/                 # Shared controller utilities (likeDislike, getContentLiked)
  db_seeder/               # Database seeders (manual activation)
  middlewares/
    auth.middleware.js      # JWT validation and admin role check
    error.middleware.js     # Error response handler
  models/                  # Mongoose schemas (User, Track, Album, Artist, Genre, Playlist, Statistic)
  router/                  # Express routers per resource
  utils/
    cloudinary.js           # Cloudinary upload/delete helpers
    dbCascade.js            # Bidirectional reference management
    deleteCascade.js        # Cascade deletion logic
    getRamdomItem.js        # Random item utility
assets/                    # Postman screenshots (documentation)
uploads/                   # Temp directory for file uploads (auto-cleaned)
```

## Database Seeding

To populate the database with sample data:

1. Ensure MongoDB is running
2. Open `src/index.js`
3. Uncomment the `await seeder.seedXXX()` lines
4. Run `npm run dev`
5. Re-comment the seeder lines after data is populated

**Warning**: Seeders delete all existing documents in each collection before re-seeding.

## Authors

- [David T. Pizarro](https://github.com/DTPF) - Fullstack Developer, Scrum Master
- [Joe Joy Alt](https://github.com/joejoyjoy) - Fullstack Developer
- [Iuliia Shikhanova](https://github.com/IuliiaNova) - Fullstack Developer
- [Javier Pascual](https://github.com/Javier-jpt) - Fullstack Developer
- [Lucia del Cacho](https://github.com/Lucydct22) - Fullstack Developer

## License

MIT
