const express = require('express');
const app = express();

app.listen('3000', ()=> {
    console.log("Servidor está no ar!");
    console.log("O Nodemon está executando, salvando alterações...")
    console.log("Hey!")
})