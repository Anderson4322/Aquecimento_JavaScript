const openModal = document.getElementById("openModal")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const getLista = document.getElementById("getlista")
const btnNav1 = document.getElementById("btnNav1")
const btnNav2 = document.getElementById("btnNav2")
const btnNav3 = document.getElementById("btnNav3")
const btnNav4 = document.getElementById("btnNav4")
const btnNav5 = document.getElementById("btnNav5")
openModal.addEventListener('click', () => {
    modal.showModal()
})
closeModal.addEventListener('click', () => {
    modal.close()
})

let lista = [{ nome: "teste", idade: "20" },
    {nome:"Anderson", idade: "18"}
]

lista.forEach(element => {

    getLista.innerHTML += `
    <main class ="cards">
    <h3>Nome:${element.nome}</h3>
    <h4>Idade:${element.idade}</h4>
    </main>
    `
});

btnNav1.addEventListener("click", ()=>{
    let msg = "Dom"
    alert(msg)
})

