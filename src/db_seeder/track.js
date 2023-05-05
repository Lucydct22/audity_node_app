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
      name: "Better of alone",
      artist: [
        artist[0].toString(),
        artist[5].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583924/tracks-dev/Rxbyn_-_better_off_alone_fvhwp8.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/better_off_alone_gfmcby.jpg",
      genre: genre[0].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 5,
      duration: 240
    },
    {
      _id: new ObjectId(),
      name: "Alone",
      artist: [
        artist[1].toString()
      ],
      audioUrl: "http://res.cloudinary.com/dmkdsujzh/video/upload/v1644583929/tracks-dev/Color_Out_-_Alone_aw3gmk.mp3",
      imageUrl: "http://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/alone_rfib7a.jpg",
      genre: genre[1].toString(),
      likedBy: [
        user[0].toString(),
        user[1].toString()
      ],
      rating: 5,
      popularity: 5,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Mahidevran - Maze of sorrow",
      artist: [
        artist[2].toString(),
        artist[7].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583928/tracks-dev/Mahidevran_Rock_Band_-_Mahidevran_-_Maze_of_sorrow_ips3zs.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/Maze_of_sorrow_r1crlr.jpg",
      genre: genre[2].toString(),
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
      name: "Aurora",
      artist: [
        artist[3].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583928/tracks-dev/Smoking_With_Poets_-_to__Aurora_t2qnaw.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/aurora_omys8y.jpg",
      genre: genre[3].toString(),
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
      name: "Sensitive",
      artist: [
        artist[4].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583922/tracks-dev/Infraction_-_Sensitive_vsu6qr.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583756/tracks-thumbnails-dev/Sensitive_unevif.jpg",
      genre: genre[4].toString(),
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
      name: "Tantalizing Youth",
      artist: [
        artist[5].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583924/tracks-dev/Social_Square_-_Tantalizing_Youth_eykq87.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/Tantalizing_Youth_bfshzo.jpg",
      genre: genre[5].toString(),
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
      name: "Igor Pumphonia - Point Of Light",
      artist: [
        artist[6].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644584871/tracks-dev/Igor_Pumphonia_-_Igor_Pumphonia_-_Point_Of_Light_kjgbyz.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644584802/tracks-thumbnails-dev/Igor_Pumphonia_-_Point_Of_Light_urg7nn.jpg",
      genre: genre[6].toString(),
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
      name: "Marsupial",
      artist: [
        artist[7].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644584996/tracks-dev/Laurence_DaNova_-_Marsupial_1_bxvpkj.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644585151/tracks-thumbnails-dev/Lurence_Danova_oeew0j.jpg",
      genre: genre[7].toString(),
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
      name: "Chasing Tomorrow (feat. Jade Gritty)",
      artist: [
        artist[8].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644585238/tracks-dev/Tab_-_Chasing_Tomorrow__feat._Jade_Gritty__leh4r1.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644585210/tracks-thumbnails-dev/TAB_fxakq3.jpg",
      genre: genre[8].toString(),
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
      name: "Healin My Blues",
      artist: [
        artist[9].toString()
      ],
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg",
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644523019/tracks/track-1644523017728_qb6wq4.mp3",
      genre: genre[9].toString(),
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
      name: "Head Over Heels (Friend Group Remix)",
      artist: [
        artist[10].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644585554/tracks-dev/The_Devil_Music_Co._-_Head_Over_Heels__Friend_Group_Remix__buotnt.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644585551/tracks-thumbnails-dev/Head_Over_Heels_Friend_Group_Remix_c9uatt.jpg",
      genre: genre[10].toString(),
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
      name: "Under Water",
      artist: [
        artist[11].toString()
      ],
      audioUrl: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586422/tracks-dev/The.madpix.project_-_Under_Water_2_gyvrkl.mp3",
      imageUrl: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644586423/tracks-thumbnails-dev/Under_Water_yoirsy.jpg",
      genre: genre[11].toString(),
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