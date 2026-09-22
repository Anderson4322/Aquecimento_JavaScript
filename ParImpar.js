const readline = require("readline-sync")

let ns = Number(readline.question("Escolha um numero:  "))

if(ns %2 == 0){
    console.log("par")
}else{
    console.log("impar")
}