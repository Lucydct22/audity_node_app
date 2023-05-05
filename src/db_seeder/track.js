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
      name: "Better",
      artist: [
        artist[12].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586627/tracks-dev/A8_MUSIC_PRODUCTIONS_-_Better_umwfkh.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644586622/tracks-thumbnails-dev/A8_vxgyaf.jpg",
      genre: genre[12].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "My Love",
      artist: [
        artist[13].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586724/tracks-dev/MODUS_-_My_Love_z7tzk1.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644586719/tracks-thumbnails-dev/My_love_wqjuiz.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Bebe go",
      artist: [
        artist[14].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586823/tracks-dev/P_Steve_Officiel_-_Bebe_go_r0hlbl.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644586816/tracks-thumbnails-dev/bebe_go_zdfn6e.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Reflections (feat. Mathias Hagen)",
      artist: [
        artist[15].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644587062/tracks-dev/Kevin_S._-_Reflections__feat._Mathias_Hagen__lypkgw.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644587058/tracks-thumbnails-dev/Reflections_qvdzan.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Un Ratito Nama (Prod: Duran The Coach)",
      artist: [
        artist[16].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644587219/tracks-dev/Lessky_-_Un_Ratito_Nama__Prod__Duran_The_Coach__npuws5.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644587222/tracks-thumbnails-dev/Un_ratito_m2aeq0.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Sax Is My Cardio",
      artist: [
        artist[17].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644587961/tracks-dev/Kuzinmuzin_-_Sax_Is_My_Cardio_fqmvwb.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644587960/tracks-thumbnails-dev/Sax_kgjfn8.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Chill Lofi Hip Hop Type Beat",
      artist: [
        artist[18].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644653754/tracks-dev/PeryCreep_-_Chill_Lofi_Hip_Hop_Type_Beat_l2k8zv.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644653692/tracks-thumbnails-dev/Chill_Lofi_Hip_Hop_Type_Beat_ltpm24.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Monday 8am",
      artist: [
        artist[19].toString()
      ],
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644602996/tracks-thumbnails-dev/Monday_8am_amfdta.jpg",
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644602494/tracks-dev/D_JAY_KOI_-_We_got_the_vibes___Feat_Fil_Straughan__uz9qw7.mp3",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    }
  ]
}

module.exports = {
  getBaseTrack
}