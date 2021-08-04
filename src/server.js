//Inportar dependência
const express = require('express'); // É uma variavel que se torna uma função por chamar uma
const path = require('path'); // chama uma outra extensão do node, ajuda a indicar o caminho do arquivo de interesse
const pages = require('./pages.js');
// iniciando a biblioteca
const server = express()// a variavel acima, que se tornou uma função
server
   // utilizar body do req
   .use(express.urlencoded({extended: true}))
   //utilizando os arquivos estaticos
   .use(express.static('public'))
   //configurar templates da engine
   .set('views', path.join(__dirname, "views"))
   .set('view engine', 'hbs')
   //rotas na aplicação
   .get('/', pages.index)
   .get('/create-orphanage', pages.createOrphanages)
   .get('/orphanages', pages.orphanages)
   .get('/orphanage', pages.orphanage)
   .post('/save-orphanage', pages.saveOrphanage)


//ligar o servidor (Não precisamos mais do servidor do chome, criamos o nosso proprio :) )
//desinstalei o Live Server
server.listen(5500)