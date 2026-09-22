const readline = require("readline-sync")

let nota1 = Number(readline.question("Qual foi sua primeira nota?: "))
let nota2 = Number(readline.question("Qual foi sua segunda nota?: "))
let nota3 = Number(readline.question("Qual foi sua terceira nota?: "))

let result = (nota1+nota2+nota3)/3
console.log(result.toFixed(1))

if(result >=7){
    console.log("Aprovado!!")
}else if(result >=5){
    console.log("Recuperaçao!!")
}else{
    console.log("Reprovado!!")
}