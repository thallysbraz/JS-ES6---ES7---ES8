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
var nome = "Thallys";
var sobrenome = "Braz";

function func1() {
  console.log("Olá " + nome);
}

function func2() {
  console.log("Bem-vindo " + sobrenome);
}
func1();
func2();

console.log(
  "___________________________________________________________________________________________________"
);

let a = 10;
let b = true;
if (b == true) {
  let b = 20;
  console.log("resultado: ", a + b);
}
