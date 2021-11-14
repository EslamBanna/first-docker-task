const express = require("express");
const app = express();
const PORT = 3000;

app.get('/',(req,res) => {
    res.send("welcome eslam elbanna how are you");
});

app.listen(PORT, ()=>{
    console.log('success listenning to port', PORT);
});