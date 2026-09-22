const readline = require("readline-sync")
let listaUser = [{nome:"teste", senha: "1234", idade: "19"}]
Cadastro()
function Cadastro(){

    let nome = readline.question("Digite seu nome:  ")
    let senha = readline.question("Digite sua senha:  ")
    let idade = readline.question("Digite sua idade:  ")
    
    if(idade <18){
        return console.log("Menores de idade sao proibidos!!");
    } else{
        listaUser.push({nome,idade,senha}) 
        console.log("Cadastro concluido!!")
        console.log(listaUser)
    }
}
