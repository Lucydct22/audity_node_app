const mongoose = require('mongoose')
const server = require("./server");
const config = require('./config/config');
const seed = require('./db/seed');
//const tracksTest = require('./db/tracksTest');
const Tracks = require('./models/track.model')

try {
  mongoose.connect(config.db.MONGO_URL);

  server.listen(config.app.PORT, async () => {
    // Tracks.insertMany(tracksTest)
    // await seedTracks()
    // await seed.seedGenre()
    // await seed.seedArtist()
    console.log(`Running on ${config.db.URL}...`);
  });
} catch (error) {
  throw new Error();
}