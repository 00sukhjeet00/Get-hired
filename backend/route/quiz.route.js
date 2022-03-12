const {Router}=require('express')
const { upload } = require('../controller/quiz.controller')
const {isAuthenticated}=require('../middleware/isAuthenticated')
const quizRoute=Router()
quizRoute.post('/upload',isAuthenticated,upload)
module.exports=quizRoute