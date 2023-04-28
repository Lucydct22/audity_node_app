const { ObjectId } = require('bson');

function getBaseTracks() {
  return [
    {
      _id: new ObjectId(),
      name: "Better of alone",
      artist: ["id_artist", "artist_id"],
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583924/tracks-dev/Rxbyn_-_better_off_alone_fvhwp8.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/better_off_alone_gfmcby.jpg",
      genre: "piano",
      likedBy: [
        "1",
        "2",
        "3"
      ],
      album: "1",
      rating: 5,
      popularity: 5,
      duration: 240
    },
    {
      _id: new ObjectId(),
      name: "Alone",
      artist: "Color Out",
      url: "http://res.cloudinary.com/dmkdsujzh/video/upload/v1644583929/tracks-dev/Color_Out_-_Alone_aw3gmk.mp3",
      thumbnail: "http://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/alone_rfib7a.jpg",
      genre: "poprock",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "2",
      rating: 5,
      popularity: 5,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Mahidevran - Maze of sorrow",
      artist: "MAHIDEVRAN ROCK BAND",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583928/tracks-dev/Mahidevran_Rock_Band_-_Mahidevran_-_Maze_of_sorrow_ips3zs.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/Maze_of_sorrow_r1crlr.jpg",
      genre: "chillout",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "3",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Aurora",
      artist: "Smoking with poets",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583928/tracks-dev/Smoking_With_Poets_-_to__Aurora_t2qnaw.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/aurora_omys8y.jpg",
      genre: "indie",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "5",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Sensitive",
      artist: "Infraction",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583922/tracks-dev/Infraction_-_Sensitive_vsu6qr.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583756/tracks-thumbnails-dev/Sensitive_unevif.jpg",
      genre: "pop",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "5",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Tantalizing Youth",
      artist: "Social Square",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583924/tracks-dev/Social_Square_-_Tantalizing_Youth_eykq87.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644583757/tracks-thumbnails-dev/Tantalizing_Youth_bfshzo.jpg",
      genre: "rock",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "6",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Igor Pumphonia - Point Of Light",
      artist: "Igor Pumphonia",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644584871/tracks-dev/Igor_Pumphonia_-_Igor_Pumphonia_-_Point_Of_Light_kjgbyz.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644584802/tracks-thumbnails-dev/Igor_Pumphonia_-_Point_Of_Light_urg7nn.jpg",
      genre: "electronic",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "7",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Marsupial",
      artist: "Laurence Danova",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644584996/tracks-dev/Laurence_DaNova_-_Marsupial_1_bxvpkj.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644585151/tracks-thumbnails-dev/Lurence_Danova_oeew0j.jpg",
      genre: "indie",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "8",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Chasing Tomorrow (feat. Jade Gritty)",
      artist: "TAB",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644585238/tracks-dev/Tab_-_Chasing_Tomorrow__feat._Jade_Gritty__leh4r1.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644585210/tracks-thumbnails-dev/TAB_fxakq3.jpg",
      genre: "electronic",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "9",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Healin My Blues",
      artist: "BJ Wilbanks",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644427496/tracks-thumbnails/thumbnail-1644427496210_qqpy4a.jpg",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644523019/tracks/track-1644523017728_qb6wq4.mp3",
      genre: "soul",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "10",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Head Over Heels (Friend Group Remix)",
      artist: "The Devil Music Co.",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644585554/tracks-dev/The_Devil_Music_Co._-_Head_Over_Heels__Friend_Group_Remix__buotnt.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644585551/tracks-thumbnails-dev/Head_Over_Heels_Friend_Group_Remix_c9uatt.jpg",
      genre: "poprock",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "11",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Under Water",
      artist: "THE.MADPIX.PROJECT",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586422/tracks-dev/The.madpix.project_-_Under_Water_2_gyvrkl.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644586423/tracks-thumbnails-dev/Under_Water_yoirsy.jpg",
      genre: "electronic",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "12",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Better",
      artist: "A8",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586627/tracks-dev/A8_MUSIC_PRODUCTIONS_-_Better_umwfkh.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644586622/tracks-thumbnails-dev/A8_vxgyaf.jpg",
      genre: "pop",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "13",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "My Love",
      artist: "Modus",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586724/tracks-dev/MODUS_-_My_Love_z7tzk1.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644586719/tracks-thumbnails-dev/My_love_wqjuiz.jpg",
      genre: "pop",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "14",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Bebe go",
      artist: "P Steve Officiel",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644586823/tracks-dev/P_Steve_Officiel_-_Bebe_go_r0hlbl.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644586816/tracks-thumbnails-dev/bebe_go_zdfn6e.jpg",
      genre: "reggaeton",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "15",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Reflections (feat. Mathias Hagen)",
      artist: "KEVIN S.",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644587062/tracks-dev/Kevin_S._-_Reflections__feat._Mathias_Hagen__lypkgw.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644587058/tracks-thumbnails-dev/Reflections_qvdzan.jpg",
      genre: "alternative",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "16",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Un Ratito Nama (Prod: Duran The Coach)",
      artist: "Igor Pumphonia",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644587219/tracks-dev/Lessky_-_Un_Ratito_Nama__Prod__Duran_The_Coach__npuws5.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644587222/tracks-thumbnails-dev/Un_ratito_m2aeq0.jpg",
      genre: "reggaeton",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "17",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Sax Is My Cardio",
      artist: "KUZINMUZIN",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644587961/tracks-dev/Kuzinmuzin_-_Sax_Is_My_Cardio_fqmvwb.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644587960/tracks-thumbnails-dev/Sax_kgjfn8.jpg",
      genre: "funk",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "18",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Chill Lofi Hip Hop Type Beat",
      artist: "PERYCREEP",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644653754/tracks-dev/PeryCreep_-_Chill_Lofi_Hip_Hop_Type_Beat_l2k8zv.mp3",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644653692/tracks-thumbnails-dev/Chill_Lofi_Hip_Hop_Type_Beat_ltpm24.jpg",
      genre: "groovy",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "19",
      rating: 5,
      popularity: 500,
      duration: 240
    },
    {
      id: new ObjectId(),
      name: "Monday 8am",
      artist: "KINEMATIC",
      thumbnail: "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644602996/tracks-thumbnails-dev/Monday_8am_amfdta.jpg",
      url: "https://res.cloudinary.com/dmkdsujzh/video/upload/v1644602494/tracks-dev/D_JAY_KOI_-_We_got_the_vibes___Feat_Fil_Straughan__uz9qw7.mp3",
      genre: "folk",
      likes: [
        "1",
        "2",
        "3"
      ],
      album: "20",
      rating: 5,
      popularity: 500,
      duration: 240
    }
  ]
}

module.exports = {
  getBaseTracks
}