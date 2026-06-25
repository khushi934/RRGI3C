const route = require('express').Router()
const {verifyToken}= require('../middleware/authMiddle')
const {login,register,dashboard , uploadFiles} = require('../controllers/userController')
const { upload } = require('../files/files')

const uploadMiddleware = (req, res, next) => {
    upload.single('image')(req, res, err => {
        if (err) {
            return next(err)
        }
        next()
    })
}

route.post('/signup',register)
route.post('/login',login)
route.get('/dashboard/:id',verifyToken,dashboard)
route.post('/upload', uploadMiddleware, uploadFiles)

module.exports = route