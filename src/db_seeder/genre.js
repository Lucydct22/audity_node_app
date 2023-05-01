const { ObjectId } = require('bson');

function getBaseGenre() {
  return [
     {
      _id: new ObjectId(),
      name: "blues"
    },
    {
      _id: new ObjectId(),
      name: "rock"
    },
    {
      _id: new ObjectId(),
      name: "pop"
    },
    {
      _id: new ObjectId(),
      name: "soul"
    },
    {
      _id: new ObjectId(),
      name: "funk"
    },
    {
      _id: new ObjectId(),
      name: "folk"
    },
    {
      _id: new ObjectId(),
      name: "tango"
    },
    {
      _id: new ObjectId(),
      name: "indie"
    },
    {
      _id: new ObjectId(),
      name: "metal"
    },
    {
      _id: new ObjectId(),
      name: "classical"
    },
    {
      _id: new ObjectId(),
      name: "country"
    },
    {
      _id: new ObjectId(),
      name: "electronic"
    },
    {
      _id: new ObjectId(),
      name: "lounge"
    },
    {
      _id: new ObjectId(),
      name: "grunge"
    },
    {
      _id: new ObjectId(),
      name: "jazz"
    }
  ]
}

module.exports = {
  getBaseGenre
}