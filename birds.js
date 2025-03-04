const express = require('express')
const router = express.Router()

const timeLog = (req , res , next) => {
  console.log('time is :' , Date.now())
  next()
}

router.use(timeLog)

router.get('/' , (req , res) => {
  res.send('hello for m bit')
})


router.get('/about' , (req , res) => {
  res.send('hello for m  about bit')
})

module.exports = router