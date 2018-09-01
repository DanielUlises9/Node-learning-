'use strict';

console.log('Corriendo server')
const express = require('express');
const app = express();

app.use(express.static('public'))
app.use('/',express.static(__dirname+'bulma/css/bulma.css'))

var visitas = 0
//Mostarndo la imagen
app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html')
	console.log('Sobres')
})
//Cuando abran la pagina, esta funcion respondera
//con el html de la pagina
/// En que puerto debe de estar trabajando
///Toda la pagina trabajara en ese puerto
app.listen(3000, () =>{
	console.log('Serever Running in Port 3000')
})