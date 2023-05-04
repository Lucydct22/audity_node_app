const { ObjectId } = require('bson');
const Genre = require('../models/genre.model')

async function getBaseArtist() {
  const genres = await Genre.find().lean()
  const genre = genres.map((genre) => genre._id);

  return [
    {
      _id: new ObjectId(),
      name: "Kim Cesarion",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683109497/artistImages/zgx5mfvpsdhtzf3glvok.jpg",
    },
    {
      _id: new ObjectId(),
      name: "C.Gambino",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683111158/artistImages/siwvay0mxpwbovffuieb.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Nicky Romero",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683111487/artistImages/oc5kg1jbgb1j0cdgop7k.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Denz",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683112532/artistImages/pau39ndxxz6znx99dbm8.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Jesper Swärd",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683113260/artistImages/dggeggczyzqwxgbunsgh.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Axel Boman",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683113154/artistImages/etefxypcsermydn6mf91.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Rasmus Hultgren",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683113394/artistImages/wbt7sh2p9su68egufa0z.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Dimitri Vangelis & Wyman",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683113611/artistImages/lqkxqie1baq8e4ij0wze.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Hemliga Klubben",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683113703/artistImages/lqvoa5giqtqpkdcihccw.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Steph K",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683113975/artistImages/e9e8mjxuewfsshwrnvng.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Romeo",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683112840/artistImages/vwhbks0xp5f9c4zy6ph5.jpg",
    },
    {
      _id: new ObjectId(),
      name: "SINAN",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683113021/artistImages/w8ro8mp507h9kctlwe6j.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Chapee",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683113134/artistImages/ulqiflrql3bnmhqqafqe.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Les Big Byrd",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683113353/artistImages/oi8cj17nb24lckycxdvr.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Kalash",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683113649/artistImages/fylx7finevr7ildmvvd9.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Karim Alger",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683113889/artistImages/xcfb5poadpou4qrf5y9c.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Prof. Stranger",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683114101/artistImages/rscycvaods5oyqxfnlgf.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Ken Ring",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683114294/artistImages/ooqdzlw4jc1bexrvvlaz.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Arre",
      genres: [
        "644b8376bb0a28e2c1eeb1a7",
        "644b8376bb0a28e2c1eeb1a7",
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683114405/artistImages/qrox8bqrhwaqty06dura.jpg",
    },
    {
      _id: new ObjectId(),
      name: "Rozh",
      genres: [
        genre[0].toString(),
        genre[1].toString(),
        genre[2].toString(),
        genre[3].toString()
      ],
      photoUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683114507/artistImages/iukci6wobkcudqxoqzjk.jpg",
    }
  ]
}

module.exports = {
  getBaseArtist
}