# Gatito PetShop

JavaScript
- Para deixar o coração dos cards dos produtos com a interação de favoritar e desfavoritar foi usado a função toggle que serve para adicionar e remover uma classe de um elemento.
A classe far deixa o coração vazio, e a classe fas deixa ele preenchido.
```js

let coracoes = document.getElementsByClassName("far")

for(let i=0; i<coracoes.length;i++){
  coracoes[i].onclick = function(event){
     event.currentTarget.classList.toggle("fas");
     //toggle mostra e esconde a classe
     //quando clicado mostra a classe fas e qnd clica dnv esconde a classe fas
  }
}

```
