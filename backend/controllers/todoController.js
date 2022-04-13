const asyncHander = require('express-async-handler')
const Todo = require('../models/todoModel')
const User = require('../models/userModel')

// @desc Get ToDO List
// @route GET /api/todo
// @access Private
const getTodo = asyncHander(async (req, res) => {
  const todos = await Todo.find({ user: req.user.id })
  res.status(200).json(todos)
})

// @desc Get ToDO List
// @route POST /api/todo
// @access Private
const setTodo = asyncHander(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Bad Request')
  }

  const todo = await Todo.create({
    text: req.body.text,
    user: req.user.id,
  })
  res.status(200).json(todo)
})

// @desc Get ToDO List
// @route PUT /api/todo/:id
// @access Private
const updateTodo = asyncHander(async (req, res) => {
  const todos = await Todo.findById(req.params.id)
  if (!todos) {
    res.status(404)
    throw new Error('Not Found')
  }

  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('Not Found')
  }

  if (todos.user.toString() !== user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedTodo)
})

// @desc Get ToDO List
// @route DELETE /api/todo/:id
// @access Private
const deleteTodo = asyncHander(async (req, res) => {
  const todos = await Todo.findById(req.params.id)
  if (!todos) {
    res.status(404)
    throw new Error('Not Found')
  }

  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('Not Found')
  }

  if (todos.user.toString() !== user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  await Todo.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTodo,
  setTodo,
  updateTodo,
  deleteTodo,
}
