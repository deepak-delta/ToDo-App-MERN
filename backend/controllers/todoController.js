const asyncHander = require('express-async-handler')

// @desc Get ToDO List
// @route GET /api/todo
// @access Private
const getTodo = asyncHander(async (req, res) => {
  res.status(200).json({ message: 'GET' })
})

// @desc Get ToDO List
// @route POST /api/todo
// @access Private
const setTodo = asyncHander(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Bad Request')
  }
  res.status(200).json({ message: 'POST' })
})

// @desc Get ToDO List
// @route PUT /api/todo/:id
// @access Private
const updateTodo = asyncHander(async (req, res) => {
  res.status(200).json({ message: `Update ${req.params.id}` })
})

// @desc Get ToDO List
// @route DELETE /api/todo/:id
// @access Private
const deleteTodo = asyncHander(async (req, res) => {
  res.status(200).json({ message: `Delete ${req.params.id}` })
})

module.exports = {
  getTodo,
  setTodo,
  updateTodo,
  deleteTodo,
}
