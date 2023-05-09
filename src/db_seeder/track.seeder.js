const { ObjectId } = require('bson');
const db = require('../models')

async function getBaseTrack() {
  const users = await db.User.find().lean()
  const user = users.map((user) => user._id)
  const genres = await db.Genre.find().lean()
  const genre = genres.map((genre) => genre._id);
  const artists = await db.Artist.find().lean()
  const artist = artists.map((artist) => artist._id);
  const albums = await db.Album.find().lean()
  const album = albums.map((album) => album._id);
  const playlists = await db.Playlist.find().lean()
  const playlist = playlists.map((playlist) => playlist._id);
  const tracks = [
    {
      _id: new ObjectId(),
      name: "Despecha",
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683275967/development/trackAudio/Despecha.mp3.mp3",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683275965/development/trackImage/pnlc2usm9bn3hkws8asi.jpg",
      genres: [genre[0].toString()],
      album: album[0].toString(),
      artists: [
        artist[0].toString(),
        artist[5].toString(),
      ],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 5,
      duration: 158
    },
    {
      _id: new ObjectId(),
      name: "Besos moja2",
      artists: [
        artist[0].toString(),
        artist[1].toString(),
      ],
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683276312/development/trackAudio/Besos%20Moja%202.mp3.mp3",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683276310/development/trackImage/zus7ix6gbwmzdpu4frlg.jpg",
      genres: [genre[1].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[1].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 5,
      duration: 229
    },
    {
      _id: new ObjectId(),
      name: "Se preparó",
      artists: [
        artist[2].toString(),
        artist[7].toString()
      ],
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683276542/development/trackAudio/Se%20Prepar%C3%83%C2%B3.mp3.mp3",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683276540/development/trackImage/jhkhbdlipyqljyxa3w4b.jpg",
      genres: [genre[2].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[2].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 188
    },
    {
      _id: new ObjectId(),
      name: "Taki Taki",
      artists: [
        artist[3].toString()
      ],
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683276717/development/trackAudio/Taki%20Taki.mp3.mp3",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683276716/development/trackImage/dv4mhpgy1ufe8rhnyvsd.jpg",
      genres: [genre[3].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[3].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 231
    },
    {
      _id: new ObjectId(),
      name: "I'm Good",
      artists: [
        artist[4].toString()
      ],
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683276874/development/trackAudio/Im_Good.mp3.mp3",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683276872/development/trackImage/g2xnp01j7nsi54mzmnms.jpg",
      genres: [genre[4].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[4].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 176
    },
    {
      _id: new ObjectId(),
      name: "Titanium",
      artists: [
        artist[5].toString()
      ],
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683276946/development/trackAudio/Titanium.mp3.mp3",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683276945/development/trackImage/jxutfdfungg0dzxnss2q.jpg",
      genres: [genre[5].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[5].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 245
    },
    {
      _id: new ObjectId(),
      name: "Flowers",
      artists: [
        artist[6].toString()
      ],
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683277096/development/trackAudio/Flowers.mp3.mp3",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683277111/development/trackImage/jqwbdqsuerfn7xykpe70.jpg",
      genres: [genre[6].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[6].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 194
    },
    {
      _id: new ObjectId(),
      name: "Party in the USA",
      artists: [
        artist[7].toString()
      ],
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683277202/development/trackAudio/Party%20In%20The%20USA.mp3.mp3",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683277201/development/trackImage/kiibhztfqoglzbkgwpgq.jpg",
      genres: [genre[7].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[7].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 207
    },
    {
      _id: new ObjectId(),
      name: "TQG",
      artists: [
        artist[8].toString()
      ],
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683277342/development/trackAudio/TQG.mp3.mp3",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683277340/development/trackImage/dkt8dx7hkwjfesin9lhx.jpg",
      genres: [genre[8].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[8].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 197
    },
    {
      _id: new ObjectId(),
      name: "Provenza",
      artists: [
        artist[9].toString()
      ],
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683277418/development/trackImage/njyzbua8jhlxfrpa9vn9.jpg",
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683277421/development/trackAudio/Provenza.mp3.mp3",
      genres: [genre[9].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[9].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 210
    },
    {
      _id: new ObjectId(),
      name: "Shakira BZRP",
      artists: [
        artist[10].toString()
      ],
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683277604/development/trackAudio/Shakira%20Bzrp.mp3.mp3",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683277602/development/trackImage/zghkplhkuuazhv6mjnc1.jpg",
      genres: [genre[10].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[10].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 217
    },
    {
      _id: new ObjectId(),
      name: "Hips Don't Lie",
      artists: [
        artist[11].toString()
      ],
      audioUrl: "https://res.cloudinary.com/di3kpwpjx/video/upload/v1683277980/development/trackAudio/Hips%20Don%27t%20Lie.mp3.mp3",
      imageUrl: "https://res.cloudinary.com/di3kpwpjx/image/upload/v1683277978/development/trackImage/tk5se6o8licjqmmapzaa.jpg",
      genres: [genre[11].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[11].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 218
    },
    {
      _id: new ObjectId(),
      name: "Better",
      artists: [
        artist[12].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586627/tracks-dev/A8_MUSIC_PRODUCTIONS_-_Better_umwfkh.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644586622/tracks-thumbnails-dev/A8_vxgyaf.jpg",
      genres: [genre[12].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[12].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      _id: new ObjectId(),
      name: "My Love",
      artists: [
        artist[13].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586724/tracks-dev/MODUS_-_My_Love_z7tzk1.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644586719/tracks-thumbnails-dev/My_love_wqjuiz.jpg",
      genres: [genre[13].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[13].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      _id: new ObjectId(),
      name: "Bebe go",
      artists: [
        artist[14].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586823/tracks-dev/P_Steve_Officiel_-_Bebe_go_r0hlbl.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644586816/tracks-thumbnails-dev/bebe_go_zdfn6e.jpg",
      genres: [genre[14].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[14].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      _id: new ObjectId(),
      name: "Reflections (feat. Mathias Hagen)",
      artists: [
        artist[5].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644587062/tracks-dev/Kevin_S._-_Reflections__feat._Mathias_Hagen__lypkgw.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644587058/tracks-thumbnails-dev/Reflections_qvdzan.jpg",
      genres: [genre[15].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[15].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      _id: new ObjectId(),
      name: "Un Ratito Nama (Prod: Duran The Coach)",
      artists: [
        artist[6].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644587219/tracks-dev/Lessky_-_Un_Ratito_Nama__Prod__Duran_The_Coach__npuws5.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644587222/tracks-thumbnails-dev/Un_ratito_m2aeq0.jpg",
      genres: [genre[16].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[16].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      _id: new ObjectId(),
      name: "Sax Is My Cardio",
      artists: [
        artist[7].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644587961/tracks-dev/Kuzinmuzin_-_Sax_Is_My_Cardio_fqmvwb.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644587960/tracks-thumbnails-dev/Sax_kgjfn8.jpg",
      genres: [genre[17].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[17].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      _id: new ObjectId(),
      name: "Chill Lofi Hip Hop Type Beat",
      artists: [
        artist[8].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644653754/tracks-dev/PeryCreep_-_Chill_Lofi_Hip_Hop_Type_Beat_l2k8zv.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644653692/tracks-thumbnails-dev/Chill_Lofi_Hip_Hop_Type_Beat_ltpm24.jpg",
      genres: [genre[0].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[18].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      _id: new ObjectId(),
      name: "Monday 8am",
      artists: [
        artist[9].toString()
      ],
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644602996/tracks-thumbnails-dev/Monday_8am_amfdta.jpg",
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644602494/tracks-dev/D_JAY_KOI_-_We_got_the_vibes___Feat_Fil_Straughan__uz9qw7.mp3",
      genres: [genre[1].toString()],
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      album: album[19].toString(),
      playlists: [
        playlist[0].toString(),
        playlist[1].toString(),
      ],
      rating: 5,
      popularity: 500,
      duration: 240
    }
  ]

  tracks.forEach(async track => {
    await db.Genre.findOneAndUpdate(
      { _id: track.genre },
      { $push: { tracks: track._id } }
    ).lean().exec()

    track.artists.forEach(async artistId => {
      await db.Artist.findOneAndUpdate(
        { _id: artistId },
        { $push: { tracks: track._id } }
      ).lean().exec()
    });

    await db.Album.findOneAndUpdate(
      { _id: track.album },
      { $push: { tracks: track._id } }
    ).lean().exec()

    track.playlists.forEach(async playlistId => {
      await db.Playlist.findOneAndUpdate(
        { _id: playlistId },
        { $push: { tracks: track._id } }
      ).lean().exec()
    });

    track.likedBy.forEach(async likeId => {
      await db.User.findOneAndUpdate(
        { _id: likeId },
        { $push: { 'likesTo.tracks': track._id } }
      ).lean().exec()
    });
  });

  return tracks
}

module.exports = {
  getBaseTrack
}