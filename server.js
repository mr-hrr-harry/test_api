const express = require('express')
require('dotenv').config()

//db connectivity
require('./database/db_connect.js')

//instance of express
const app = express()

//to parse the data transfered
app.use(express.json())

app.use('/api/test/', require('./router/router.js'))

app.listen(process.env.PORT, () => {
    console.log('Server started and is listening...');
})