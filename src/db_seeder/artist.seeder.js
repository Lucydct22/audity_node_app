const { ObjectId } = require('bson');
const db = require('../models')

async function getBaseArtist() {
  const users = await db.User.find().lean()
  const user = users.map((user) => user._id);
  const genres = await db.Genre.find().lean()
  const genre = genres.map((genre) => genre._id);
  const artists = [
    {
      _id: new ObjectId(),
      name: "Rosalia",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215154/development/artistImage/xhnvgbikj2nyz4cwvyok.jpg",
      genres: [
        genre[0].toString(),
        genre[15].toString(),
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Ozuna",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215304/development/artistImage/svstexrwlebgnizopk7b.jpg",
      genres: [
        genre[1].toString(),
        genre[16].toString(),
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "David Guetta",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215362/development/artistImage/vilzwn0g37fkb4hu2w7b.jpg",
      genres: [
        genre[2].toString(),
        genre[17].toString(),
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Miley Cyrus",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215421/development/artistImage/xnn3ns2cf7sov1ciqfko.jpg",
      genres: [
        genre[3].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Karol G",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215484/development/artistImage/z5a9s2rmx2f5zli7a5on.jpg",
      genres: [
        genre[4].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Shakira",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215520/development/artistImage/wr3od9hxuhvkq9brqngn.jpg",
      genres: [
        genre[5].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Bizarrap",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215580/development/artistImage/tv52kxck3qltro3dyrs8.jpg",
      genres: [
        genre[6].toString(),
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Arcangel",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215613/development/artistImage/ns5ydaphv7mdhajbadbx.jpg",
      genres: [
        genre[7].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Quevedo",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215641/development/artistImage/imueid8yufvzvnb0dznf.jpg",
      genres: [
        genre[8].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Calvin Harris",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215712/development/artistImage/fkwohkqoxlo3jp4za33o.jpg",
      genres: [
        genre[9].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Farruko",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215770/development/artistImage/oludu7fs3fraoipff0ad.jpg",
      genres: [
        genre[10].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Alan Walker",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215819/development/artistImage/iadw0nyv8sqx6qvi5hv3.jpg",
      genres: [
        genre[11].toString(),
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Tiesto",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215856/development/artistImage/qwjcczzzpnmet9srdhcf.jpg",
      genres: [
        genre[12].toString(),
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Falling in Reverse",
      imageUrl: "hhttps://res.cloudinary.com/di3kpwpjx/image/upload/v1683215897/development/artistImage/cjzjzsw8uumx1qc1oofk.jpg",
      genres: [
        genre[13].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    },
    {
      _id: new ObjectId(),
      name: "Eminem",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683215928/development/artistImage/o5jl5wqkg9lovjdq6mat.jpg",
      genres: [
        genre[14].toString()
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ]
    }
  ]

  artists.forEach(artist => {
    artist.genres.forEach(async genreId => {
      await db.Genre.findOneAndUpdate(
        { _id: genreId },
        { $push: { artists: artist._id } }
      ).lean().exec()
    });
    artist.likedBy.forEach(async likeId => {
      await db.User.findOneAndUpdate(
        { _id: likeId },
        { $push: { 'likesTo.artists': artist._id } }
      ).lean().exec()
    });
  });

  return artists
}

module.exports = {
  getBaseArtist
}