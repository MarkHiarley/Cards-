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
    nome: "Sike",
    id: "001",
    classes: "lendario",
    cidad0e: "melhor lendario"
};

// Função para obter dados do localStorage
const getLocalStorage = () => JSON.parse(localStorage.getItem('dbCards')) ?? [];

// Função para salvar dados no localStorage
const setLocalStorage = (db_Cards) => localStorage.setItem("dbCards", JSON.stringify(db_Cards));

// CRUD - Create (criar um novo cliente)
const createClient = (cards) => {
    const db_Cards = getLocalStorage();
    db_Cards.push(cards);
    setLocalStorage(db_Cards);
};




