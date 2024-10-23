const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delet(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World2324!')
})

app.get('/about', (req, res) => {
    res.send('Hello about')
})

app.get('/contect', (req, res) => {
    res.send('Hello contect!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fech intro to slug
    // for URL http://127.0.0.1:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) //will output  {slug: 'intro-to-padosi'}
    console.log(req.query) //will output  {mode=dark region=in}
    res.send(`Hello blog and ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fech intro to js
//     res.send('Hello blog and intro-to-js')
// })

// app.get('/blog/intro-to-pythen', (req, res) => {
//     // logic to fech intro to pythen
//     res.send('Hello blog and intro-to-pythen')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
