//Adicionando elemento no começo e no final da lista, item 0 e item 5

const list = document.getElementById(`lista`)

//Criando a li e colocando o texto a ser adicionado na li

//Item 0

const itemZero = document.createElement(`li`)

const textoItemZero = document.createTextNode(`Item 0`)

itemZero.appendChild(textoItemZero)

//Item 5

const itemCinco = document.createElement(`li`)

const textoItemCinco = document.createTextNode(`Item 5`)

itemCinco.appendChild(textoItemCinco)

//Adicionando os novos itens à lista

list.insertAdjacentElement(`afterbegin`, itemZero)

list.insertAdjacentElement(`beforeend`, itemCinco)