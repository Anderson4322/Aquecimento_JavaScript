const openModal = document.getElementById("openModal")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const getLista = document.getElementById("getlista")
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

