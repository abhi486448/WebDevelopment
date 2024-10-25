const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')


// app.use(express.static("public"))
app.use('/blog', blog)

// Middleware 1 logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "i am harry"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send('Hacked by Middleware 1')
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('M2')
    req.harry = "i am rohan bhai"
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.harry)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})