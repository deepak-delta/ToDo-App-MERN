const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const port = process.env.PORT || 5000

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ToDo List API',
      version: '1.0.0',
      description: 'ToDo app with Node.js, Expresss',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],

    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: [`${__dirname}/swagger/docs.js`],
}

const specs = swaggerJsDoc(options)

connectDB()

const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use(express.urlencoded({ extended: false }))
app.use('/api/todo', require('./routes/todoRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))
