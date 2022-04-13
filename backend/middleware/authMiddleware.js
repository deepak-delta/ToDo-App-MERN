const jwt = require('jsonwebtoken')
const asyncHander = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHander(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      //Get user from token
      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Unauthorized')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Unauthorized, No token provided')
  }
})

module.exports = {
  protect,
}
