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

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let mensagem = document.querySelector("#mensagem");
let nomeOk = false
let emailOk = false
let mensagemOk = false
let mapa = document.querySelector("#mapa")

function validaNome() {
    let txt = document.querySelector("#txtNome")

    if (nome.value.length < 3) {  //se o nome for menor que 3 
        txt.innerHTML = "Nome Inválido"
        txt.style.color = "red"
    } else {
        txt.innerHTML = ""
        nomeOk = true  //enviar formulario caso nome esteja certo
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1) {  // caso o usuario não coloque o @  //indexOf  é utilizado para encontrar um valor dentro de uma string ou array, caso o valor não seja encontrado, ele retorna -1.
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = ""
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")

    if (mensagem.value.length >= 100) {
        txtMensagem.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtMensagem.style.color = "red"
    } else {
        txtMensagem.innerHTML = ""
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}

//Aumenta o mapa quando passa o mouse em cima 
function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "350px"
    mapa.style.height = "350px"
}
