const { ObjectId } = require('bson');
const db = require('../models')

async function getBasePlaylist() {
  const users = await db.User.find().lean()
  const user = users.map((user) => user._id)
  const genres = await db.Genre.find().lean()
  const genre = genres.map((genre) => genre._id);
  const artists = await db.Artist.find().lean()
  const artist = artists.map((artist) => artist._id);
  const tracks = await db.Track.find().lean()
  const track = tracks.map((track) => track._id);

  return [
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "Road trip! All the masters I need!",
      description: "Get your mic on with this beats. You are going to sing all the way down",
      cover: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644625060/tracks-thumbnails-dev/car_yx6ld1.jpg",
      publicAccessible: false,
      totalTracks: 10,
      followers: 100,
      rating: 5,
      likedBy: [
        user[0].toString()
      ],
      tracks: [
        track[0].toString(),
        track[1].toString(),
        track[2].toString(),
        track[3].toString(),
        track[4].toString(),
        track[5].toString(),
        track[6].toString(),
        track[7].toString(),
        track[8].toString(),
        track[9].toString(),
      ],
      followedBy: [
        user[0].toString(),
        user[1].toString(),
      ],
      artists: [
        artist[0].toString(),
        artist[5].toString(),
      ],
      genres: [
        genre[0].toString(),
        genre[2].toString(),
      ]
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "Motorcycle Mama!",
      description: "Take it easy on the wheels with this hits",
      cover: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644625058/tracks-thumbnails-dev/driving_g56eyw.jpg",
      publicAccessible: true,
      totalTracks: 10,
      followers: 100,
      rating: 5,
      likedBy: [
        user[0].toString()
      ],
      tracks: [
        track[0].toString(),
        track[1].toString(),
        track[2].toString(),
        track[3].toString(),
        track[4].toString(),
        track[5].toString(),
        track[6].toString(),
        track[7].toString(),
        track[8].toString(),
        track[9].toString(),
      ],
      followedBy: [
        user[0].toString(),
        user[1].toString(),
      ],
      artists: [
        artist[0].toString(),
        artist[5].toString(),
      ],
      genres: [
        genre[0].toString(),
        genre[5].toString(),
      ]
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "Chillout with the beats",
      "isFollowed": false,
      description: "Stressed? Don´t worry the final project will soon be over. Relax in the meantime with this hits.",
      cover: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644625056/tracks-thumbnails-dev/relax_coqdlx.jpg",
      publicAccessible: false,
      totalTracks: 10,
      followers: 100,
      rating: 5,
      likedBy: [
        user[0].toString()
      ],
      tracks: [
        track[0].toString(),
        track[1].toString(),
        track[2].toString(),
        track[3].toString(),
        track[4].toString(),
        track[5].toString(),
        track[6].toString(),
        track[7].toString(),
        track[8].toString(),
        track[9].toString(),
      ],
      followedBy: [
        user[0].toString(),
        user[1].toString(),
      ],
      artists: [
        artist[0].toString(),
        artist[5].toString(),
      ],
      genres: [
        genre[0].toString(),
        genre[2].toString(),
      ]
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "Boogie with the beats",
      description: "Take the dance floor and try to get your groove on with this beats",
      cover: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644625049/tracks-thumbnails-dev/boogie_rcl1zd.jpg",
      publicAccessible: false,
      totalTracks: 10,
      followers: 100,
      rating: 5,
      likedBy: [
        user[0].toString()
      ],
      tracks: [
        track[0].toString(),
        track[1].toString(),
        track[2].toString(),
        track[3].toString(),
        track[4].toString(),
        track[5].toString(),
        track[6].toString(),
        track[7].toString(),
        track[8].toString(),
        track[9].toString(),
      ],
      followedBy: [
        user[0].toString(),
        user[1].toString(),
      ],
      artists: [
        artist[0].toString(),
        artist[5].toString(),
      ],
      genres: [
        genre[3].toString(),
        genre[7].toString(),
      ]
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "Smile. You are beautiful",
      description: "For those times when you are feeling down.",
      cover: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644624690/tracks-thumbnails-dev/smile_kpfzj8.jpg",
      publicAccessible: false,
      totalTracks: 10,
      followers: 100,
      rating: 5,
      likedBy: [
        user[0].toString()
      ],
      tracks: [
        track[0].toString(),
        track[1].toString(),
        track[2].toString(),
        track[3].toString(),
        track[4].toString(),
        track[5].toString(),
        track[6].toString(),
        track[7].toString(),
        track[8].toString(),
        track[9].toString(),
      ],
      followedBy: [
        user[0].toString(),
        user[1].toString(),
      ],
      artists: [
        artist[0].toString(),
        artist[5].toString(),
      ],
      genres: [
        genre[0].toString(),
        genre[2].toString(),
      ]
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "Staying home",
      description: "Feeling homey. Let´s keep it warm.",
      cover: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644626587/tracks-thumbnails-dev/brennan-ehrhardt-HALe2SmkWAI-unsplash_c1yhnz.jpg",
      publicAccessible: false,
      totalTracks: 10,
      followers: 100,
      rating: 5,
      likedBy: [
        user[0].toString()
      ],
      tracks: [
        track[0].toString(),
        track[1].toString(),
        track[2].toString(),
        track[3].toString(),
        track[4].toString(),
        track[5].toString(),
        track[6].toString(),
        track[7].toString(),
        track[8].toString(),
        track[9].toString(),
      ],
      followedBy: [
        user[0].toString(),
        user[1].toString(),
      ],
      artists: [
        artist[0].toString(),
        artist[5].toString(),
      ],
      genres: [
        genre[3].toString(),
        genre[6].toString(),
      ]
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "Space hits!",
      description: "Have no money for a space trip but you can have a space hit!",
      cover: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644626067/tracks-thumbnails-dev/fly_hx4xyp.jpg",
      publicAccessible: false,
      totalTracks: 10,
      followers: 100,
      rating: 5,
      likedBy: [
        user[0].toString()
      ],
      tracks: [
        track[0].toString(),
        track[1].toString(),
        track[2].toString(),
        track[3].toString(),
        track[4].toString(),
        track[5].toString(),
        track[6].toString(),
        track[7].toString(),
        track[8].toString(),
        track[9].toString(),
      ],
      followedBy: [
        user[0].toString(),
        user[1].toString(),
      ],
      artists: [
        artist[0].toString(),
        artist[5].toString(),
      ],
      genres: [
        genre[0].toString(),
        genre[2].toString(),
      ]
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "Hits for the weekend",
      description: "Have no plans but will be happy to hear you are happy.",
      cover: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644626096/tracks-thumbnails-dev/hits_nuk3qf.webp",
      publicAccessible: false,
      totalTracks: 10,
      followers: 100,
      rating: 5,
      likedBy: [
        user[0].toString()
      ],
      tracks: [
        track[0].toString(),
        track[1].toString(),
        track[2].toString(),
        track[3].toString(),
        track[4].toString(),
        track[5].toString(),
        track[6].toString(),
        track[7].toString(),
        track[8].toString(),
        track[9].toString(),
      ],
      followedBy: [
        user[0].toString(),
        user[1].toString(),
      ],
      artists: [
        artist[0].toString(),
        artist[5].toString(),
      ],
      genres: [
        genre[0].toString(),
        genre[2].toString(),
      ]
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "Party time",
      description: "Have you finished your master project? Let´s party!",
      cover: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644626587/tracks-thumbnails-dev/amy-shamblen-lJt-3NUFng4-unsplash_z4icus.jpg",
      publicAccessible: false,
      totalTracks: 10,
      followers: 100,
      rating: 5,
      likedBy: [
        user[0].toString()
      ],
      tracks: [
        track[0].toString(),
        track[1].toString(),
        track[2].toString(),
        track[3].toString(),
        track[4].toString(),
        track[5].toString(),
        track[6].toString(),
        track[7].toString(),
        track[8].toString(),
        track[9].toString(),
      ],
      followedBy: [
        user[0].toString(),
        user[1].toString(),
      ],
      artists: [
        artist[0].toString(),
        artist[5].toString(),
      ],
      genres: [
        genre[0].toString(),
        genre[2].toString(),
      ]
    },
    {
      _id: new ObjectId(),
      userId: user[0].toString(),
      name: "Glitter",
      description: "Let´s get glittering.",
      cover: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644627361/tracks-thumbnails-dev/glitter_ru5qsp.jpg",
      publicAccessible: false,
      totalTracks: 10,
      followers: 100,
      rating: 5,
      likedBy: [
        user[0].toString()
      ],
      tracks: [
        track[0].toString(),
        track[1].toString(),
        track[2].toString(),
        track[3].toString(),
        track[4].toString(),
        track[5].toString(),
        track[6].toString(),
        track[7].toString(),
        track[8].toString(),
        track[9].toString(),
      ],
      followedBy: [
        user[0].toString(),
        user[1].toString(),
      ],
      artists: [
        artist[0].toString(),
        artist[5].toString(),
      ],
      genres: [
        genre[0].toString(),
        genre[2].toString(),
      ]
    }
  ]
}

module.exports = {
  getBasePlaylist
}