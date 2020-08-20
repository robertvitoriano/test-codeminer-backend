const express = require('express');
const Router = require('./routes/router.js');
const PORT = 4000;
require('./database/connection')
const server = express();
server.use(express.json());
server.use(Router);
server.get('/',(req,res)=>{
    res.send({message:'Hello '});
})
server.listen(PORT,()=>{
    console.log('My app is up and ruuning at port '+PORT);
})//
