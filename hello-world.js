'use strict';

console.log('Corriendo server')
const express = require('express');
const app = express();

app.use(express.static('public'))
var visitas = 0
//Mostarndo la imagen
app.get('/',function(req,res){
	res.send('<h1>Sobres</h1>')
	console.log('Sobres')
})
//Cuando abran la pagina, esta funcion respondera
//con el html de la pagina
/// En que puerto debe de estar trabajando
///Toda la pagina trabajara en ese puerto
app.listen(3000, () =>{
	console.log('Serever Running in Port 3000')
})