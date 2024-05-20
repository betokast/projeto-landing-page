const setaEsquerda = window.document.getElementById("seta-esquerda");
const setaDireita = window.document.getElementById("seta-direita");

const leonardo = window.document.getElementById("leonardo");
const samantha = window.document.getElementById("samantha");
const bruna = window.document.getElementById("bruna");

function rolarParaDireita() {
  leonardo.style = "display:none";
  bruna.style = "display:flex";

  setaDireita.style = "display:none";
  setaEsquerda.style = "display:flex";
}

function rolarParaEsquerda(){
  leonardo.style = "display:flex";
  bruna.style = "display:none";

  setaDireita.style = "display:flex";
  setaEsquerda.style = "display:none";
}
