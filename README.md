# 🐱 Gatito PetShop

JavaScript
- Para deixar o coração dos cards dos produtos com a interação de favoritar e desfavoritar foi usado a função toggle que serve para adicionar e remover uma classe de um elemento.
A classe far deixa o coração vazio, e a classe fas deixa ele preenchido.
```js

function favoritarCoracao() {
  let coracoes = document.getElementsByClassName("far")

  for(let i in coracoes){
  coracoes[i].onclick = event => event.currentTarget.classList.toggle("fas")  
  }
}

favoritarCoracao()

```
O site está sendo feito de forma responsiva com o auxílio das propriedades do flexbox do css. Uma prévia do conteúdo está abaixo.

<div style="display:flex;">
<img width="470px" src="https://user-images.githubusercontent.com/53832972/134438481-8a5eaf44-b312-4baa-be03-f7f9f53ae91f.PNG"/>
<img width="470px" src="https://user-images.githubusercontent.com/53832972/134438586-6badda9e-3c89-4d9c-a63d-d5c08829b002.PNG"/>
</div>

<br> 

link do git pages https://paolaguedes.github.io/gatito/
