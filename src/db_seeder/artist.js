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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb842fae710a21f648e26dd910",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb9fb2b5ff325f43536a2a4ae2",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb8d683372296589f7c718dea6",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5ebda71714b11b7c451281e54ca",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb9acc7db8348539634e585144",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb19cd7b26fa38886bd6355b3c",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb470a02669d59859a21676ed0",
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
      photoUrl: "https://i.scdn.co/image/d3e1ce67d48fa05431bdd2b0f14ffc294960f0bf",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb014c22b80be73cee9c7835b1",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5ebf913a1de42e743a6f462dfe1",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb6dca4eb1f2347310b27c3000",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb5c1a2d5e3c93fe46ff18878d",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb8d4c9938258d04640bf9f091",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5ebb7ed50718dfd36111ab26f40",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5ebbeffebd066171f03029a3c2a",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb5c33b372d2ef6275ed536450",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb559babce20a71e8210990c29",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5ebd093354b1da8c7c55c4cee9f",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5ebf6b060d446495921bd200593",
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
      photoUrl: "https://i.scdn.co/image/ab6761610000e5eb31b2c3d4c8866b38310591be",
    }
  ]
}

module.exports = {
  getBaseArtist
}