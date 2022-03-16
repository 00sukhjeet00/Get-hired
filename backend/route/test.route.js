const {Router}=require('express')
const { upload, getTest } = require('../controller/test.controller')
const {isAuthenticated}=require('../middleware/isAuthenticated')
const testRoute=Router()
testRoute.get('/',isAuthenticated,getTest)
testRoute.post('/upload',isAuthenticated,upload)
module.exports=testRoute