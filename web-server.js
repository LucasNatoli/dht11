var express = require('express');
const bodyParser = require('body-parser')
const app = express()
const db = require('./db')
const router = require('./router')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('pwa'));


//drop and resync with { force: true }
db.sequelize.sync().then(() => {
  console.log('db sync ok')
  router(app, db)
  console.log('routed')
  app.listen(3000, () => {
    console.log('Cultibox wer service running')
    
  })
})

