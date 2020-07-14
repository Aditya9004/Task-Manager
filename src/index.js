const express = require('express')
require('./db/mongoose')
const userRoutes = require('./routers/users')
const taskRoutes = require('./routers/tasks')

const app = express()

const port = process.env.PORT

// // Middleware for maintenance mode
// app.use((req,res,next) => {
//     res.status(503).send('This site is under maintenance mode')
// })

app.use(express.json())

app.use(userRoutes)
app.use(taskRoutes)

app.listen(port, () => {
    console.log('Server is up on port '+port)
})