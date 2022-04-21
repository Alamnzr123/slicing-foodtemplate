//import express
const express = require('express');
//import bodyparser
const bodyParser = require('body-parser');
//use route selalu gunakan dibawah body-parser atau module yang lain
const useRoute = require('./src/router/user.router')

//deklarasi express.js
const app = express();
app.use(bodyParser.json())
app.use(useRoute)


//run express
app.listen(3001, () => {
    console.log('listening on PORT 3001')
})