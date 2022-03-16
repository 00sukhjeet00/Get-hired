const {Router}=require('express')
const { upload, getQuiz, getQuizQuestion } = require('../controller/quiz.controller')
const {isAuthenticated}=require('../middleware/isAuthenticated')
const quizRoute=Router()
quizRoute.get('/',isAuthenticated,getQuiz)
quizRoute.post('/upload',isAuthenticated,upload)
quizRoute.post('/question',isAuthenticated,getQuizQuestion)
module.exports=quizRoute