const readline = require("readline-sync")

const Correta_senha = 1234

let nome = readline.question("Username: ")
let senha = Number(readline.question("Senha: "))

if(senha == Correta_senha){
    console.log("bem vindo user:" +nome)
} else{
    console.log("senha incorreta")
}
