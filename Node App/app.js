const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.listen('800', ()=>{
    console.log("O Servidor foi Iniciado!")
    console.log("NodeMon está em execução!")
})