const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 8008;

const app = express();













// ========================

// checking REST api
app.get('/rest', (req, res)=>{
    res.json({
        success: 'true',
        message: 'You hit the the server...'
    })
})

// checking server status
app.listen(PORT, ()=>{
   console.log(`-> Express Server is ready at http://loacalhost:${process.env.PORT}`)
})