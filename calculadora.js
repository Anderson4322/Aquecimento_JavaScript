const readline = require("readline-sync")

let n1 = Number(readline.question("numero 1: "))
let n2 = Number(readline.question("numero 2: "))
let op = readline.question("qual operador logico? + - * /: ")

if(op == "+"){
    console.log(n1+n2)
}else if(op == "-"){
    console.log(n1-n2)

} else if(op == "*"){
  console.log(n1*n2)
}
else{
 console.log(n1/n2)
}