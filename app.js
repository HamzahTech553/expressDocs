
const express = require('express')

const app = express()
exports.app = app
const port = 3000

app.use(express.static('public'))

// app.get('/' , (req , res) => {
//     res.send("hello express")
// })


// app.post('/hello' , (req , res) => {
//     res.send("post hello")
// })
// app.put('/' , (req , res) => {
//     res.send("hello for put ")
// })

// app.post('/say/b' , (req , res , next) => {
//     console.log("from the nesxt")
//     next()
// } , (req , res) => {
//     res.send("from iwthout ")
// })

// app.route('/book')
//     .get((req , res) => {
//         res.send('from get')
//     })
//     .put((req , res) => {
//         res.send('from put')
//     })
//     .delete((req , res) => {
//         res.send('from de')
//     })
// const ab = function (req , res , next) {
//     console.log('form ab')
//     next()
// }
// exports.ab = ab
// const abc = function (req , res , next) {
//     console.log('form ab')
//     next()
// }
// exports.abc = abc

// const cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   app.get('/example/d', [cb0, cb1], (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from D!')
//   })
  
// const birds = require('./birds')

// const birds = require('./birds')


// app.use('/birds', birds)



// app.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
// })

// const myLogger = function (req , res , nextddd) {
//     console.log('form logged')
//     nextddd()
// }
// const reequestTime = function (req , res , next) {
//     res.reequestTime = Date.now()
//     next()
// }
// app.use(myLogger)
// app.use(reequestTime)
// app.get('/' , (req , res) => {
//     res.send('form root')
// })


// const requestTime = (req , res , next) => {
//     req.requestTime = Date.now()
//     next()
// }

// app.use(requestTime)

// app.get('/' , (req , res ) => {
//     let responseText = 'hello world<br>'
//     responseText += `<small>Requested at: ${req.requestTime}</small>`
//     res.send(responseText)  
// })



// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
//   })

//   app.use('/user/:id', (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
//   })
  

// app.use('/user/:id', (req, res, next) => {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }, (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
//   })
  


// app.get('/user/:id', (req, res, next) => {
//     console.log('ID:', req.params.id)
//     next()
//   }, (req, res, next) => {
//     res.send('User Info')
//   })
  
//   // handler for the /user/:id path, which prints the user ID
//   app.get('/user/:id', (req, res, next) => {
//     res.send('dkdkdk')
//   })
  

// app.get('/user/:id', (req, res, next) => {
//     // if the user ID is 0, skip to the next route
//     if (req.params.id === '0') next('route')
//     // otherwise pass the control to the next middleware function in this stack
//     else next()
//   }, (req, res, next) => {
//     // send a regular response
//     res.send('regular')
//   })
  
//   // handler for the /user/:id path, which sends a special response
//   app.get('/user/:id', (req, res, next) => {
//     res.send('special')
//   })
  
// function logOriginalUrl (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }
  
//   function logMethod (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
//   }
  
//   const logStuff = [logOriginalUrl, logMethod]
//   app.get('/user/:id', logStuff, (req, res, next) => {
//     res.send('User Info')
//   })
  

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })
  

// app.response.sendStatus = function (statusCode, type, message) {
//     // code is intentionally kept simple for demonstration purpose
//     return this.contentType(type)
//       .status(statusCode)
//       .send(message)
//   }
  
// app.get('/', (req, res, next) => {
//     fs.readFile('/file-does-not-exist', (err, data) => {
//       if (err) {
//         next(err) // Pass errors to Express.
//       } else {
//         res.send(data)
//       }
//     })
//   })

// app.get('/' , (req , res) => {
//     req.send('dddd')
// })


// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  

// app.get('/user/:id', async (req, res, next) => {
//     const user = await getUserById(req.params.id)
//     res.send(user)
//   })
  
// app.get('/', (req, res, next) => {
//     setTimeout(() => {
//       try {
//         throw new Error('BROKEN')
//       } catch (err) {
//         next(err)
//       }
//     }, 100)
//   })
  
app.get('/', (req, res, next) => {
    Promise.resolve().then(() => {
      throw new Error('BROKEN')
    }).catch(next) // Errors will be passed to Express.
  })
  









app.use((req , res , next) => {
    res.status(404).send('404 what are you doing there is nothing here')
})


   

app.listen(port , () => {
    console.log(`listen of port ${port}`)
})