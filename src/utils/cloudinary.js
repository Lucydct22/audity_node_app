const cloudinary = require('cloudinary').v2
const cloudinaryConfig = require('../config/config').cloudinary

cloudinary.config(cloudinaryConfig)

const uploadImage = async (imagePath, folder, width = 300, height = 300) => {
  const imageUploaded = await cloudinary.uploader.upload(imagePath,
    {
      resource_type: 'image',
      folder: folder,
      gravity: 'east',
      height: height,
      width: width,
      crop: 'scale',
      overwrite: true
    })
  return imageUploaded
}
const uploadAudio = async (audioFile, name, folder) => {
  const audioUploaded = await cloudinary.uploader.upload(audioFile,
    { resource_type: 'video',
    public_id: name,
    folder: folder,
    overwrite: true
  })
  return audioUploaded
}

module.exports = { cloudinary, uploadImage, uploadAudio }