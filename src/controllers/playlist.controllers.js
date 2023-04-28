const Playlist = require('../models/playlist.model')

async function postPlaylist(req, res) {
 const userId = req.auth.sub
  const { name, description, cover, thumbnail } = req.body

  try {
    const playlist = new Playlist({
      name: name,
      userId: userId,
      //collaborative,
      description: description,
      cover: cover,
      thumbnail: thumbnail,
      publicAccessible: true,
      totalTracks: 0,
      rating: 0,
      //likedBy: 0,
      //tracks: 0,
     // followedBy: 0
    })

    try {
      const playlistSaved = await playlist.save()

      return res.status(200).send({
        status: 200,
        message: 'Added correctly',
        playlist: playlistSaved
      })
    } catch (err) {
      return res.status(500).send({ status: 500, message: 'Error of server', error: err })
    }

  } catch (error) {
    return res.status(500).send({ status: 500, error: err })
  }
}


module.exports = {
  postPlaylist,
  //getPlaylists,
  //getPlaylistById,
  //putPlaylist,
  //deletePlaylist
}