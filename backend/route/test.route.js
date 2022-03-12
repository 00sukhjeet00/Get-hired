const {Router}=require('express')
const { upload } = require('../controller/test.controller')
const {isAuthenticated}=require('../middleware/isAuthenticated')
const testRoute=Router()
testRoute.post('/upload',isAuthenticated,upload)
module.exports=testRoute