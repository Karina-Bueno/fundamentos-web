//Declaração de variaveis 

// var nome = 159; //posso redeclarar em outra linha do código
// let idade = "Karina"; //posso colocar uma string numa variavel de numero. Não consigo redeclarar dentro do mesmo escopo
// const algumaCoisa = "Alguma Coisa"; //não é interessante redefinir o nome de uma const

// idade = 26 //posso só mudar seu valor

// //DOM

// document.getElementById("nome")  //trás um unico elemento
// document.getElementsByClassName("contato")  //trás todos os elementos com a classe contato por exemplo
// document.getElementsByName()  //pouco usado por ser parecido com getElementById
// document.querySelector("nome")  //trás qualquer elemento tanto por class, id, etc., porém somente o primeiro elemento ex. nome
// document.querySelectorAll("nome")  //trás qualquer elemento, e mais de um elemento ex. nome 
// window  //representa a janela do navegador

let nome = document.querySelector("#nome")

function validaNome() {
    if (nome.value.length >= 3) {
        console.log("nome valido");
        nome.style.borderBottom = "3px solid green"
    } else {
        console.log("nome inválido");
        nome.style.borderBottom = "3px solid red"
    }
}
