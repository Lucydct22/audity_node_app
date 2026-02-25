# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Audity is a music streaming backend API (Node.js/Express/MongoDB). It handles user management, track/album/artist/genre/playlist CRUD, media uploads via Cloudinary, and Auth0-based authentication.

**Deployed at**: https://audity.dtpf.es/

## Commands

```bash
npm run dev       # Start dev server with nodemon (port 4000)
npm start         # Start production server
```

No test runner or linter is configured.

## Environment

- Uses `.env.development` / `.env.production` loaded based on `NODE_ENV` (defaults to `development`)
- Config is centralized in `src/config/config.js`, which exports a single object with `app`, `db`, `auth0`, and `cloudinary` sections
- MongoDB runs locally without auth in dev (port 27017, db `audity-development`)

## Architecture

**MVC-like pattern**: `src/router/` → `src/controllers/` → `src/models/`

All API routes are mounted at `/api/v1/` in `src/server.js`. Each resource (user, track, album, artist, genre, playlist, statistic) has its own router, controller, and model file.

### Authentication

Auth0 JWT via `express-oauth2-jwt-bearer`. Two middleware levels in `src/middlewares/auth.middleware.js`:
- `ensureAuth` — validates JWT, populates `req.auth.payload.sub` (Auth0 user ID)
- `ensureAdminAuth` — checks `role === 'admin'` on the user document

Routes apply these as arrays: `[md_auth.ensureAuth]` or `[md_auth.ensureAuth, md_auth.ensureAdminAuth]`.

### Bidirectional References & Cascade Operations

Models maintain bidirectional references (e.g., a Track's `artists[]` and an Artist's `tracks[]`). This is handled by cascade utilities in `src/utils/`:
- `dbCascade.js` — `migrateCascadeArray()`, `migrateCascadeObject()`, `deleteCascadeArray()` for maintaining both sides of relationships on create/update/delete
- `deleteCascade.js` — specific cascade logic for genre and artist deletion
- Controllers call these utilities after creating or deleting documents

### Like/Dislike System

Toggle pattern: if user is in the model's `likedBy[]`, remove them; otherwise add them. Simultaneously updates the user's `likesTo` nested object. Located in `src/controllers/utils/likeDislike.js`.

### Media Uploads

File uploads via `express-fileupload` (15MB limit, temp dir `./uploads`). Cloudinary integration in `src/utils/cloudinary.js`:
- `uploadImage()` — resizes to 300x300 by default
- `uploadAudio()` — uploaded as `video` resource type
- `removeMedia()` — deletes by `publicId`
- Files organized in Cloudinary under `development/` or `production/` folders
- Temp files are cleaned up with `fs.unlink` after upload

### Response Convention

```javascript
res.status(200).send({ status: 200, data: payload })
res.status(400).send({ status: 400 })
res.status(500).send({ status: 500, error: err })
```

### Database Seeding

Seeders in `src/db_seeder/` — activated by uncommenting calls in `src/index.js`. Each seeder deletes all existing documents then creates new ones.

## Middleware Stack (src/server.js)

Applied in order: JSON parser → CORS (whitelist) → file upload → Helmet (CSP configured for Auth0/Google Analytics) → routes → error handler.

## Key Conventions

- Most read queries use `.lean()` for performance
- User ID comes from Auth0's `req.auth.payload.sub`, not from a local auth system
- User-uploaded tracks use `uploadByUser` field and set `publicAccessible: false` by default
- Error middleware translates `UnauthorizedError` and `invalid_token` to Spanish-language 401 responses
