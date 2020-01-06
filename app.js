/* Tipos de variaveis  
    let nome = "Thallys"
    var sobrenome = "Braz"
    const pi = 3.14/
*/

/*  CONSTANTES 
Usar constantes em coisas que nunca irá mudar ou coisas que dificilmente irá mudar.
Ex.: const express = require("express");
*/

/* Diferença entre var e let
    A diferença se da pelo tipo de escopo.
    let funciona nos escopos Global, Local e Bloco
    var funciona no escopos Global, Local    
*/
var nomes = "Thallys";
var sobrenome = "Braz";
var idade = 21;

var empresa = {
  nome: "First",
  cidade: "Brasília",
  site: "firstdecision.com",
  email: "gmail@firstdecision.com.br"
};

var user = {
  nomes,
  sobrenome,
  idade,
  ...empresa
};

console.log(user);
