
const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/' , (req , res) => {
    res.send("hello express")
})


app.post('/hello' , (req , res) => {
    res.send("post hello")
})
app.put('/' , (req , res) => {
    res.send("hello for put ")
})


app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})













app.use((req , res , next) => {
    res.status(404).send('404 what are you doing there is nothing here')
})


   

app.listen(port , () => {
    console.log(`listen of port ${port}`)
})