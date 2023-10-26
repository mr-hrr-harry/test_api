const mongoose = require('mongoose')

//database url
url = process.env.db_driver_url

//db driver
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const con = mongoose.connection

con.on('open', ()=>{
    console.log('Database Reachable...');
})