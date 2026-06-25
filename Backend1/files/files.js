const multer = require('multer')
const {CloudinaryStorage}= require('multer-storage-cloudinary')
const cloudinary = require('cloudinary').v2
const path = require('path')
require('dotenv').config()


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, '..', 'uploads'))
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now()+"-"+file.originalname)
//     }
// })
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'uploads',
        resource_type: 'auto'
    }
})

const upload = multer({ storage })

module.exports = { upload }

