const { ObjectId } = require('bson');
const db = require('../models')

async function getBaseAlbum() {
  const users = await db.User.find().lean()
  const user = users.map((user) => user._id)
  const genres = await db.Genre.find().lean()
  const genre = genres.map((genre) => genre._id);
  const artists = await db.Artist.find().lean()
  const artist = artists.map((artist) => artist._id);
  const albums = [
    {
      _id: new ObjectId(),
      name: "Flyga",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273cfb34a37cfed6297d8c18231",
      artists: [
        artist[0].toString(),
        artist[1].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[1].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "XXX (Bow Wow Wow)",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273256e16efc88a39e4795d5f32",
      artists: [
        artist[1].toString()
      ],
      genres: [
        genre[3].toString(),
        genre[4].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Stay A Little Longer",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b2732cf9821eb5087702a63330b5",
      artists: [
        artist[2].toString()
      ],
      genres: [
        genre[5].toString(),
        genre[6].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "WTF",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b2730b7020f4bce3fc16f5370df3",
      artists: [
        artist[3].toString()
      ],
      genres: [
        genre[7].toString(),
        genre[8].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Vivaldi",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273a7fc8699c8a8c6dc4b90c948",
      artists: [
        artist[4].toString()
      ],
      genres: [
        genre[9].toString(),
        genre[10].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Velvet Pony Trax 11 part 2",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b27347d2bc41f459a0422c3dfff5",
      artists: [
        artist[5].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "PARTYPINGLA",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273e467c6a0b070f390daa47693",
      artists: [
        artist[6].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Someone To Love",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273e9e5fbbde2d4147260db99bf",
      artists: [
        artist[7].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "I samma bil",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b27349108981b176704992078242",
      artists: [
        artist[8].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Ofiltrerad",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273d43759a300274388d5b3ac7d",
      artists: [
        artist[9].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Closer",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273e04542a5b2f5c4e80b8043f9",
      artists: [
        artist[10].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "YOUNG",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b27350414c15d3e534effd5840ab",
      artists: [
        artist[11].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "THE REAL",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273189b84e563687baf99c8d800",
      artists: [
        artist[12].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Eternal Light Brigade",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b2732f4d9bfec9c13fc7979ed942",
      artists: [
        artist[13].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Tombolo (Réédition)",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273966b2b28801e75d7d293c3a9",
      artists: [
        artist[14].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "KARIMO II",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273aa311f30a24a7002e089c379",
      artists: [
        artist[5].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Midnight FM",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273d62e4c88ec0df746317863af",
      artists: [
        artist[6].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Jag såg en kvinna",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273897c8155c64e1436daf8a466",
      artists: [
        artist[7].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Alltid varit här",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273940bcb3763667fa773d46a29",
      artists: [
        artist[8].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "38",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273a009515d20b39aa065540314",
      artists: [
        artist[9].toString()
      ],
      genres: [
        genre[0].toString(),
        genre[0].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    }
  ]

  albums.forEach(album => {
    album.genres.forEach(async genreId => {
      await db.Genre.findOneAndUpdate(
        { _id: genreId },
        { $push: { albums: album._id } }
      ).lean().exec()
    });

    album.artists.forEach(async artistId => {
      await db.Artist.findOneAndUpdate(
        { _id: artistId },
        { $push: { albums: album._id } }
      ).lean().exec()
    });

    album.likedBy.forEach(async likeId => {
      await db.User.findOneAndUpdate(
        { _id: likeId },
        { $push: { 'likesTo.albums': album._id } }
      ).lean().exec()
    });
  });

  return albums
}

module.exports = {
  getBaseAlbum
}