const { ObjectId } = require('bson');

function getBaseGenre() {
  return [
     {
      _id: new ObjectId(),
      name: "Blues",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683104756/genreImages/iodlqztvsn9gxjwvn181.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Rock",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683104829/genreImages/ljccj5vjajuozfmmxf9q.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Funk",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683104887/genreImages/qtueupi8w4twtw6dzpl5.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Folk",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683104938/genreImages/lbfukw2akrcs8bbrnhve.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Tango",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683105159/genreImages/qkvxgaphoam81fjajhsp.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Indie",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683105186/genreImages/efpnwedzox1taoyzayid.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Metal",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683105214/genreImages/pf8onnp3gq3nbdjhnnam.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Classic",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683105358/genreImages/r7ufgbdcbi7e9cphbgcx.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Country",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683106578/genreImages/eg49amdqx78eyxn6aqfa.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Electronic",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683106652/genreImages/ijapo4kol6eyssrowmbd.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Lounge",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683107113/genreImages/eokwlnl3iujnvwletxmc.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Grunge",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683107224/genreImages/giwoscy6pb5s1t1zuj7t.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Pop",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683107251/genreImages/pa4yurzrrw4zifgss0hz.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Soul",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683107284/genreImages/jl7plejurirbzsk5c170.jpg'
    },
    {
      _id: new ObjectId(),
      name: "Jazz",
      thumbnail: 'http://res.cloudinary.com/di3kpwpjx/image/upload/v1683107310/genreImages/xoninmwbynxbptrufrwb.jpg'
    }
  ]
}

module.exports = {
  getBaseGenre
}