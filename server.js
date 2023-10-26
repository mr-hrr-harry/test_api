const express = require('express')
require('dotenv').config()

//db connectivity
require('./database/db_connect.js')

//instance of express
const app = express()

app.listen(process.env.PORT, () => {
    console.log('Server started and is listening...');
})