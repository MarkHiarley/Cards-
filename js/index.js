const botaoAlterarTema = document.getElementById("botao-tema");
console.log(botaoAlterarTema); 

const body = document.querySelector('body'); 

botaoAlterarTema.addEventListener("click", () => {
  body.classList.toggle("modo-escuro");

  if (body.classList.contains("modo-escuro")) {
    botaoAlterarTema.querySelector('img').src = "./src/imagens/lua.webp"; // Ícone para o modo escuro
  } else {
    botaoAlterarTema.querySelector('img').src = "./src/imagens/sol.png"; // Ícone para o modo claro
  }
});
