import * as express from 'express'; // importar tudo que tem dentro de express e chamando de 'express' símbolo * = Tudo

const app = express(); 
const port = 3000

// Code here - escreva aqui - aqui que colocaremos os códigos 

app.get ('/', (request,response) => {; // rota padrão
    response.send('Hello Word');
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}!`)


}); // listen é uma função utilizada pelo express para monitorar uma porta em () a porta de trabalho // depois executa o que estiver mandando fazer nessa função

