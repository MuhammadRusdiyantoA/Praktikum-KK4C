const express = require('express')
const app = express()
const connectDB = require('./config/db')
const userRouter = require('./router/users')

const port = 3000

app.use(express.json()) // Parsing json
app.use(express.urlencoded({ extended: true })) // Parsing form input

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(userRouter)

connectDB()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})