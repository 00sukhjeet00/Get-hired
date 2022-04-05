const { Router } = require('express')
const {login,register,changePassword}=require('../controller/user.controller')
const {isAuthenticated} =require('../middleware/isAuthenticated')
const userRoute = Router();
userRoute.post('/register',register)
userRoute.post('/login',login)
userRoute.post('/change/password',isAuthenticated,changePassword)
module.exports = userRoute