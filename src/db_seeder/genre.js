const { ObjectId } = require('bson');

function getBaseGenre() {
  return [
     {
      _id: new ObjectId(),
      name: "blues",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/0a59eded5365fc8def2a1f55f561d539'
    },
    {
      _id: new ObjectId(),
      name: "rock",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/cc70a35f2818e37c0920f4b5d3358b14'
    },
    {
      _id: new ObjectId(),
      name: "pop",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/8ebaef2cb613291cebf43942e060cfb9'
    },
    {
      _id: new ObjectId(),
      name: "soul",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/707df6429f05ea8a973630dda985c008'
    },
    {
      _id: new ObjectId(),
      name: "funk",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/be4a452db812655c10016518adcf97a8'
    },
    {
      _id: new ObjectId(),
      name: "folk",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/fbc8ad1599369736972f526a380c83a7'
    },
    {
      _id: new ObjectId(),
      name: "tango",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/f10c1a34c845d1b0dc13f00884ef5cf2'
    },
    {
      _id: new ObjectId(),
      name: "indie",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/a0cd2981131067b9fdd6ddf29e2be888'
    },
    {
      _id: new ObjectId(),
      name: "metal",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/9432f15b0b3fab8f15681d6618d539e2'
    },
    {
      _id: new ObjectId(),
      name: "classical",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/9993834c6f3dc3eb0bb86f846f17605d'
    },
    {
      _id: new ObjectId(),
      name: "country",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/2e96c276477d23f29f5d5c1a47ff26af'
    },
    {
      _id: new ObjectId(),
      name: "electronic",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/e9e22f978580dec225c990d3422e0ea7'
    },
    {
      _id: new ObjectId(),
      name: "lounge",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/9993834c6f3dc3eb0bb86f846f17605d'
    },
    {
      _id: new ObjectId(),
      name: "grunge",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/d7b6cd1c1d377c572217fcb427d017b8'
    },
    {
      _id: new ObjectId(),
      name: "jazz",
      thumbnail: 'https://asset.cloudinary.com/di3kpwpjx/226cab11ace10db72af23478490920ec'
    }
  ]
}

module.exports = {
  getBaseGenre
}