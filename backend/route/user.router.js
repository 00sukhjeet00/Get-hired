const { Router } = require('express')
const {login,register}=require('../controller/user.controller')
const userRoute = Router();
userRoute.post('/register',register)
userRoute.post('/login',login)

module.exports = userRoute