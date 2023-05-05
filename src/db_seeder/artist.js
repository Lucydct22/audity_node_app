const { ObjectId } = require('bson');
const Genre = require('../models/genre.model')

async function getBaseArtist() {
  const genres = await Genre.find().lean()
  const genre = genres.map((genre) => genre._id);

  return [
    {
      _id: new ObjectId(),
      name: "Rosalia",
      genres: [
        genre[13].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215154/development/artistImage/xhnvgbikj2nyz4cwvyok.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Ozuna",
      genres: [
        genre[16].toString(),
        genre[17].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215304/development/artistImage/svstexrwlebgnizopk7b.jpg",
    },
    {
      _id: new ObjectId(),
      name: "David Guetta",
      genres: [
        genre[6].toString(),
        genre[10].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215362/development/artistImage/vilzwn0g37fkb4hu2w7b.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Miley Cyrus",
      genres: [
        genre[13].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215421/development/artistImage/xnn3ns2cf7sov1ciqfko.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Karol G",
      genres: [
        genre[16].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215484/development/artistImage/z5a9s2rmx2f5zli7a5on.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Shakira",
      genres: [
        genre[13].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215520/development/artistImage/wr3od9hxuhvkq9brqngn.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Bizarrap",
      genres: [
        genre[16].toString(),
        genre[17].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215580/development/artistImage/tv52kxck3qltro3dyrs8.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Arcangel",
      genres: [
        genre[16].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215613/development/artistImage/ns5ydaphv7mdhajbadbx.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Quevedo",
      genres: [
        genre[16].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215641/development/artistImage/imueid8yufvzvnb0dznf.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Calvin Harris",
      genres: [
        genre[14].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215712/development/artistImage/fkwohkqoxlo3jp4za33o.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Farruko",
      genres: [
        genre[18].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215770/development/artistImage/oludu7fs3fraoipff0ad.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Alan Walker",
      genres: [
        genre[10].toString(),
        genre[13].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215819/development/artistImage/iadw0nyv8sqx6qvi5hv3.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Tiesto",
      genres: [
        genre[10].toString(),
        genre[14].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215856/development/artistImage/qwjcczzzpnmet9srdhcf.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Falling in Reverse",
      genres: [
        genre[2].toString()
      ],
      imageUrl: "hhttp://res.cloudinary.com/di3kpwpjx/image/upload/v1683215897/development/artistImage/cjzjzsw8uumx1qc1oofk.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Eminem",
      genres: [
        genre[17].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683215928/development/artistImage/o5jl5wqkg9lovjdq6mat.jpg",
    }
  ]
}

module.exports = {
  getBaseArtist
}