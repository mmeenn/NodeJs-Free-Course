const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{

    res.send("Hello Borntodev");

})

app.listen(port,()=>{

    debug("Listening on port ");

})