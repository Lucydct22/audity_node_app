const { ObjectId } = require('bson');

function getBaseGenre() {
  return [
     {
      _id: new ObjectId('644b8582393ccc41e137ed51'),
      name: "blues"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed52'),
      name: "rock"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed53'),
      name: "pop"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed54'),
      name: "soul"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed55'),
      name: "funk"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed56'),
      name: "folk"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed56'),
      name: "tango"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed57'),
      name: "indie"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed58'),
      name: "metal"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed59'),
      name: "classical"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed10'),
      name: "country"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed11'),
      name: "electronic"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed12'),
      name: "lounge"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed13'),
      name: "grunge"
    },
    {
      _id: new ObjectId('644b8582393ccc41e137ed14'),
      name: "jazz"
    }
  ]
}

module.exports = {
  getBaseGenre
}