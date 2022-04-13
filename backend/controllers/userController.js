const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHander = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHander(async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Bad Request')
  }

  // Check if user already exists
  const user = await User.findOne({ email })
  if (user) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  })
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      token: generateJWT(newUser._id),
    })
  } else {
    res.status(400)
    throw new Error('Bad Request')
  }
})

// @desc User Login
// @route POST /api/users/login
// @access Public
const loginUser = asyncHander(async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400)
    throw new Error('Bad Request')
  }
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      token: generateJWT(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid Credentials')
  }
})

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHander(async (req, res) => {
  const { _id, name } = await User.findById(req.user.id)
  res.status(200).json({
    id: _id,
    name,
  })
})

//Generate JWT
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}
module.exports = { registerUser, loginUser, getMe }
