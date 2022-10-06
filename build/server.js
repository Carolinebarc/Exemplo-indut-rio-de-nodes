"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express"); // importar tudo que tem dentro de express e chamando de 'express' símbolo * = Tudo
var app = express();
var port = 3000;
// Code here - escreva aqui - aqui que colocaremos os códigos 
app.get('/', function (request, response) {
    ; // rota padrão
    response.send('Hello Word');
});
app.listen(port, function () {
    console.log("Server is running at port ".concat(port, "!"));
}); // listen é uma função utilizada pelo express para monitorar uma porta em () a porta de trabalho // depois executa o que estiver mandando fazer nessa função
