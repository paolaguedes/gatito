let coracoes = document.getElementsByClassName("far")

for(let i=0; i<coracoes.length;i++){
  coracoes[i].onclick = function(event){
     event.currentTarget.classList.toggle("fas");
     //toggle mostra e esconde a classe
     //quando clicado mostra a classe fas e qnd clica dnv esconde a classe fas
  }
}


function playAudio() {
    document.getElementById("gatoAudio").play();
}