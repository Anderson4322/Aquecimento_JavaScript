//Usando o DOM para manipular elementos HTML
const openModal = document.getElementById("openModal")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const getLista = document.getElementById("getlista")
const btnNav1 = document.getElementById("btnNav1")
const btnNav2 = document.getElementById("btnNav2")
const btnNav3 = document.getElementById("btnNav3")
const btnNav4 = document.getElementById("btnNav4")
const btnNav5 = document.getElementById("btnNav5")
const formModal = document.getElementById("formModal")

//Abrindo e fechando o modal
openModal.addEventListener('click', () => {
    modal.showModal()
})
closeModal.addEventListener('click', () => {
    modal.close()
})

//Criando Lista
let lista = [{ nome: "teste", idade: "20" },
{ nome: "Anderson", idade: "18" }
]

//Percorrendo lista usando ForEach
lista.forEach(element => {

    getLista.innerHTML += `
    <main class ="cards">
    <h3>Nome:${element.nome}</h3>
    <h4>Idade:${element.idade}</h4>
    </main>
    `
    console.log(element)
});

//Utilizando eventos nos documentos
let msg
btnNav1.addEventListener("click", () => {
    msg = "html -> body -> div -> p"
    alert(msg)
})


btnNav2.addEventListener("click", () => {
    msg = "Imagem.src = 'foto.png'"
    alert(msg)
})


btnNav3.addEventListener("click", () => {
    msg = "const p = document.createElement('p'); document.body.appendChild(p)"
    alert(msg)
})


btnNav4.addEventListener("click", () => {
    msg = "botao.addEventListenner('click', minhaFuncao);"
    alert(msg)
})

btnNav5.addEventListener("click", () => {
    msg = "document.querySelector('h1') document.getElementById('titulo')"
    alert(msg)
})


