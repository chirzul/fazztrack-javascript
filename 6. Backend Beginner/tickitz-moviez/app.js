require('dotenv').config()
const express = require('express')
const main = require('./src/main')
const app = express()
const port = process.env.APP_PORT
const db = require('./src/config/db')

const init = async () => {
  try {
    await db.connect()
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use('/api/v1', main)

    app.listen(port, () => {
      console.log(`Tickitz Movie App listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

init()
