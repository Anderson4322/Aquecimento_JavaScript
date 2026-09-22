const readline = require("readline-sync")

let numero = Number(readline.question("Escolha um numero:  "))

console.log(`Antecessor: ${numero-1}` )
console.log(`${numero}` )
console.log(`Sucessor:${numero+1}`)
