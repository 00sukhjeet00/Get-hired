const jwt = require('jsonwebtoken')
const User = require('../model/user')
const isAuthenticated = (req, res, next) => {
    const { token } = req.headers
    jwt.verify(token, process.env.JWT_SECRET, (err, userToken) => {
        if (err)
            req.error = { msg: "Wrong Token" }
        else {
            req.user = userToken
            next()
        }
    })

}
module.exports = { isAuthenticated }