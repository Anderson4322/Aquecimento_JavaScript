const readline = require("readline-sync")

let n = Number(readline.question("N: "))

if(n < 0){
    console.log("negativo")
}
else{
    console.log("positivo")
}