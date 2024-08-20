//CRUD 
//CRIAR



//TESTE 01

// const cardtemporario = {
//     nome: "cabras",
//     id:"001",
//     classes:"destruidor",
//     descricao:"melhor lendario"

// }

// const criarcard = (card) => {
//     const BancoCards = JSON.parse(localStorage.getItem('BancoCards')) ?? []
//     BancoCards.push (card)
//     localStorage.setItem("BancoCards", JSON.stringify(BancoCards))
// } 

// Dados de exemplo de um cliente
const cardtemporario = {
    nome: "ike",
    id: "001",
    classes: "rio",
    cidad0e: "melhor lendario"
};

// Função para obter dados do localStorage
const getLocalStorage = () => JSON.parse(localStorage.getItem('dbCards')) ?? [];

// Função para salvar dados no localStorage
const setLocalStorage = (db_Cards) => localStorage.setItem("dbCards", JSON.stringify(db_Cards));

// CRUD - Create (criar um novo cliente)
const criarcard = (cards) => {
    const db_Cards = getLocalStorage();
    db_Cards.push(cards);
    setLocalStorage(db_Cards);
};

//LER A PORRA DO BANCO QUE TEM OS CARDS
const Lercards = () => getLocalStorage()

//ATUALIZRA O CARALHO DOS CARDS
const atualizardados = (index, cards) => {
    const db_Cards = Lercards()
    db_Cards[index] = cards
    setLocalStorage(db_Cards)
}

//DELETA AS MERDAS DOS VALORES
const deletar = (index) => {
    const db_Cards = Lercards()
    db_Cards.splice(index, 1 )
    setLocalStorage(db_Cards)
}
