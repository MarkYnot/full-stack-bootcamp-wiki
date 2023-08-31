const express = require('express');
const router = require('./router');
const cors = require('cors');


const app = express()
app.use(cors())
app.use(express.json())
// app.use((req, res, next) => {
// res.header('Access-Control-Allow-Origin', '*')
// res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
// res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
// res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
// next();
// });
app.use('/', router)


const  PORT =  3000
app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`)
})