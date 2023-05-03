const cloudinary = require('cloudinary').v2
const cloudinaryConfig = require('../config/config').cloudinary

cloudinary.config(cloudinaryConfig)

const uploadImage = async (imagePath, folder, width = 300, height = 300) => {
  const imageUploaded = await cloudinary.uploader.upload(imagePath,
    {
      resource_type: 'image',
      folder: folder,
      gravity: 'east',
      height: width,
      width: height,
      crop: 'scale',
      overwrite: true
    })
  return imageUploaded
}
const uploadAudioFile = async (audioFile, name) => {
  const audioFileUploaded = await cloudinary.uploader.upload(audioFile,
    { resource_type: 'video', public_id: name, folder: 'audioFiles/', overwrite: true })
  return audioFileUploaded
}

module.exports = { cloudinary, uploadImage, uploadAudioFile }