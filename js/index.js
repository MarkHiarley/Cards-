const botaoAlterarTema = document.getElementById("botao-tema");
console.log(botaoAlterarTema); 

const body = document.querySelector('body'); 

botaoAlterarTema.addEventListener("click", () => {
  body.classList.add("modo-escuro"); 
});

