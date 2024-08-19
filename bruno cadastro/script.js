// Criando as variáveis para os inputs

var el_nomeEquipe = document.querySelector("#nome-da-equipe")
var el_nomeTec = document.querySelector("#tecnico")
var el_rgTec = document.querySelector("#rg-tecnico")

// Info Atleta

var el_nomeAtleta = document.querySelector("#atleta")
var el_rgAtleta = document.querySelector("#rg_atleta")
var el_dataNascimento = document.querySelector("#data_nascimento")
var el_numeroCamisa = document.querySelector("#numero_camisa")
var el_Posicao = document.querySelector("#posicao")

// Botões

var el_Inscrever = document.querySelector("#inscrever_equipe")
var el_Adicionar = document.querySelector("#adicionar_atleta")
var el_VerInscritos = document.querySelector("#ver_inscritos")

let el_formAtleta = document.querySelector("form")
let atletas = []

el_formAtleta.addEventListener('submit', (e)=>{
    e.preventDefault()
    const atleta = {
        nome: el_nomeAtleta.value.trim(),
        rg: el_rgAtleta.value.trim(),
        data_nascimento: el_dataNascimento.value.trim(),
        numero_camisa: el_numeroCamisa.value.trim(),
        posicao: el_Posicao.value.trim()

    }

    atletas.append(atleta)
})


el_Inscrever.addEventListener("click",()=>{alert("hi")})
el_Adicionar.addEventListener("click",()=>{alert("hi")})
el_VerInscritos.addEventListener("click",()=>{console.log(atletas)})