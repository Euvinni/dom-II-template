//INPUT
//Esconder a senha
//Onclick do botão




//FORM
//Retirar a classe dark
//Adicionar a classe light

//Escondendo a senha
const inputSenha = document.getElementById(`password`)


const esconderSenha = (event) => {
    //Alterando o comportamento padrão de recarregar a página
    event.preventDefault()
    inputSenha.setAttribute(`type`, `password`)
}

//Alterando a classe light para dark

const formulario = document.getElementsByTagName(`form`)[0]

formulario.classList.remove(`light`)

formulario.classList.add(`dark`)
