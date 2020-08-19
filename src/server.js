const express = require('express');
const Router = require('./routes/router.js');
const PORT = 4000;

const server = express();
server.use(Router);
server.get('/',(req,res)=>{
    res.send({message:'Hello World'});
})
server.listen(PORT,()=>{
    console.log('My app is up and ruuning ar port '+PORT);
})
