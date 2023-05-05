const { Album } = require("../models")

async function getAlbums(req, res) {
  try {
    const albumStored = await Album.find().lean().exec()

    if (!albumStored) {
      return res.status(400).send({ status: 400 })
    }
    return res.status(200).send({ status: 200, albums: albumStored })
  } catch (err) {
    return res.status(500).send({ status: 500, error: err })
  }
}





// async function postAlbum(req, res) {
//   const { name, year, totalTracks, thumbnail } = req.body
//   try {
//     const album = new Album({
//       name,
//       year,
//       totalTracks,
//       thumbnail
//     })
//     const savedAlbum = await album.save()
//     return res.status(201).send({ status: 201, album: savedAlbum })
//   } catch (err) {
//     return res.status(500).send({ status: 500, error: err })
//   }
// }

module.exports = {
  getAlbums,
  // postAlbum,
}

