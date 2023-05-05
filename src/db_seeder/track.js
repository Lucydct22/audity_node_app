const { ObjectId } = require('bson');
const db = require('../models')

async function getBaseTrack() {
  const users = await db.User.find().lean()
  const user = users.map((user) => user._id)
  const genres = await db.Genre.find().lean()
  const genre = genres.map((genre) => genre._id);
  const artists = await db.Artist.find().lean()
  const artist = artists.map((artist) => artist._id);

  return [
    {
      _id: new ObjectId(),
      name: "Despecha",
      artist: [
        artist[0].toString(),
        artist[5].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683275967/development/trackAudio/Despecha.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683275965/development/trackImage/pnlc2usm9bn3hkws8asi.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 5,
      duration: 158
    },
    {
      _id: new ObjectId(),
      name: "Besos moja2",
      artist: [
        artist[1].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683276312/development/trackAudio/Besos%20Moja%202.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683276310/development/trackImage/zus7ix6gbwmzdpu4frlg.jpg",
      genre: genre[1].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 5,
      duration: 229
    },
    {
      id: new ObjectId(),
      name: "Se preparó",
      artist: [
        artist[2].toString(),
        artist[7].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683276542/development/trackAudio/Se%20Prepar%C3%83%C2%B3.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683276540/development/trackImage/jhkhbdlipyqljyxa3w4b.jpg",
      genre: [
        genre[2].toString(),
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 188
    },
    {
      id: new ObjectId(),
      name: "Taki Taki",
      artist: [
        artist[3].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683276717/development/trackAudio/Taki%20Taki.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683276716/development/trackImage/dv4mhpgy1ufe8rhnyvsd.jpg",
      genre: genre[3].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 231
    },
    {
      id: new ObjectId(),
      name: "I'm Good",
      artist: [
        artist[4].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683276874/development/trackAudio/Im_Good.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683276872/development/trackImage/g2xnp01j7nsi54mzmnms.jpg",
      genre: genre[4].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 176
    },
    {
      id: new ObjectId(),
      name: "Titanium",
      artist: [
        artist[5].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683276946/development/trackAudio/Titanium.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683276945/development/trackImage/jxutfdfungg0dzxnss2q.jpg",
      genre: genre[5].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 245
    },
    {
      id: new ObjectId(),
      name: "Flowers",
      artist: [
        artist[6].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683277096/development/trackAudio/Flowers.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683277111/development/trackImage/jqwbdqsuerfn7xykpe70.jpg",
      genre: genre[6].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 194
    },
    {
      id: new ObjectId(),
      name: "Party in the USA",
      artist: [
        artist[7].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683277202/development/trackAudio/Party%20In%20The%20USA.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683277201/development/trackImage/kiibhztfqoglzbkgwpgq.jpg",
      genre: genre[7].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 207
    },
    {
      id: new ObjectId(),
      name: "TQG",
      artist: [
        artist[8].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683277342/development/trackAudio/TQG.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683277340/development/trackImage/dkt8dx7hkwjfesin9lhx.jpg",
      genre: genre[8].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 197
    },
    {
      id: new ObjectId(),
      name: "Provenza",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683277418/development/trackImage/njyzbua8jhlxfrpa9vn9.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683277421/development/trackAudio/Provenza.mp3.mp3",
      genre: genre[9].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 210
    },
    {
      id: new ObjectId(),
      name: "Shakira BZRP",
      artist: [
        artist[10].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683277604/development/trackAudio/Shakira%20Bzrp.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683277602/development/trackImage/zghkplhkuuazhv6mjnc1.jpg",
      genre: genre[10].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 217
    },
    {
      id: new ObjectId(),
      name: "Hips Don't Lie",
      artist: [
        artist[11].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683277980/development/trackAudio/Hips%20Don%27t%20Lie.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683277978/development/trackImage/tk5se6o8licjqmmapzaa.jpg",
      genre: genre[11].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 218
    },
    {
      id: new ObjectId(),
      name: "Arcangel BZRP",
      artist: [
        artist[12].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683280290/development/trackAudio/Arcangel%20Bzrp.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683280289/development/trackImage/bhwzdk9uftvpxyt5mjmt.jpg",
      genre: genre[12].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 225
    },
    {
      id: new ObjectId(),
      name: "Quevedo BZRP",
      artist: [
        artist[13].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683280375/development/trackAudio/Quevedo%20Bzrp%20.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683280373/development/trackImage/gpt4fkqmsp6jovbfzepu.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 219
    },
    {
      id: new ObjectId(),
      name: "One Kiss",
      artist: [
        artist[14].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683280650/development/trackAudio/One_Kiss.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683280649/development/trackImage/uk2daykhkro3ytycv7l9.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 214
    },
    {
      id: new ObjectId(),
      name: "Summer",
      artist: [
        artist[5].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683282153/development/trackAudio/Summer.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683282152/development/trackImage/wuf58cuwbkui5rmlgmqp.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 233
    },
    {
      id: new ObjectId(),
      name: "Pepas",
      artist: [
        artist[6].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683282539/development/trackAudio/Pepas.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683282537/development/trackImage/gfsgk2parclocpelzpzf.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 288
    },
    {
      id: new ObjectId(),
      name: "El incomprendido",
      artist: [
        artist[7].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683282639/development/trackAudio/El%20Incomprendido.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683282636/development/trackImage/n4xrjitvuz651urrgvej.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 267
    },
    {
      id: new ObjectId(),
      name: "Faded",
      artist: [
        artist[8].toString()
      ],
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683282951/development/trackAudio/Faded.mp3.mp3",
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683282949/development/trackImage/vik0kfqept37zngkdgrt.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 207
    },
    {
      id: new ObjectId(),
      name: "The Spectre",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683283142/development/trackImage/desofbqtvrugsbkjj4pi.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683283144/development/trackAudio/The%20Spectre.mp3.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 207
    },
    {
      id: new ObjectId(),
      name: "He's a Pirate",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683283371/development/trackImage/l4sptpmfoc17dboceynj.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683283373/development/trackAudio/Hes%20A%20Pirate.mp3.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 420
    },
    {
      id: new ObjectId(),
      name: "The Business",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683283551/development/trackImage/jko4ayqmbj8phzamq3yh.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683283553/development/trackAudio/The%20Business.mp3.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 191
    },
    {
      id: new ObjectId(),
      name: "Popular Monster",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683283715/development/trackImage/kphfwsyma9vxzwon9gfl.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683283716/development/trackAudio/Popular%20Monster.mp3.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 232
    },
    {
      id: new ObjectId(),
      name: "Watch The World Burn",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683283861/development/trackImage/h3kn80nldqsfrc38oqrx.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683283863/development/trackAudio/Watch%20The%20World%20Burn.mp3.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 204
    },
    {
      id: new ObjectId(),
      name: "Fast Lane",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683283954/development/trackImage/itvptkzthnwd10vostyr.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683283955/development/trackAudio/Fast%20Lane.mp3.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 249
    },
    {
      id: new ObjectId(),
      name: "Lose Yourself",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683284034/development/trackImage/fx6xegewzrcsspskkpgw.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683284035/development/trackAudio/Lose%20Yourself.mp3.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 323
    },
    {
      id: new ObjectId(),
      name: "La Jumpa",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683284436/development/trackImage/dm8gphcvjqouoigsaksz.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683284438/development/trackAudio/La%20Jumpa.mp3.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 255
    },
    {
      id: new ObjectId(),
      name: "Si Se Da",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683284653/development/trackImage/f9wm6flgnpuncxttjrd1.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683284613/development/trackAudio/Si%20Se%20Da.mp3.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 335
    },
    {
      id: new ObjectId(),
      name: "Playa Del Inglés",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683284873/development/trackImage/cqtfs12tjd5gwt6isd4y.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683284854/development/trackAudio/Playa%20Del%20Ingl%C3%83%C2%A9s.mp3.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 237
    },
    {
      id: new ObjectId(),
      name: "Vista Al Mar",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "http://res.cloudinary.com/di3kpwpjx/image/upload/v1683284799/development/trackImage/iwm0b0mpuk959sqbmqsy.jpg",
      audioUrl: "http://res.cloudinary.com/di3kpwpjx/video/upload/v1683284801/development/trackAudio/Vista%20Al%20Mar.mp3.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 180
    }
  ]
}

module.exports = {
  getBaseTrack
}