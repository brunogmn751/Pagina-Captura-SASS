const botaoUm = document.querySelector(".caixa-jornada__botao");
const botaoDois = document.querySelector(".aprender__botao");
const botaoFechar = document.querySelector(".popup__fechar");
const body = document.querySelector("body");

let popupAberto = false;

function abrirPopup(){
    console.log("Clicou!");
    body.classList.add("body--popup")
    popupAberto = true;
};

function fecharPopup(){
    console.log("Clicou!");
    body.classList.remove("body--popup")
    popupAberto = false;
};

botaoUm.addEventListener("click", abrirPopup);
botaoDois.addEventListener("click", abrirPopup);
botaoFechar.addEventListener("click", fecharPopup);