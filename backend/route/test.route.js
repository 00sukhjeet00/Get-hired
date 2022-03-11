const {Router}=require('express')
const {isAuthenticated}=require('../middleware/isAuthenticated')
const testRoute=Router()
testRoute.post('/upload',isAuthenticated)
module.exports=testRoute