// MANIPULANDO A ORIGEM E O RESUMO ORIGEM
const inputOrigem = document.getElementById("origem");
const resumoOrigem = document.getElementById("resumo-origem");

inputOrigem.addEventListener("input", () => {
    if (inputOrigem.value.trim() !== "") {
        resumoOrigem.innerText = inputOrigem.value;
    } else {
        resumoOrigem.innerHTML = "-";
    }
});


// MANIPULANDO O DESTINO E O RESUMO DESTINO
const inputDestino = document.getElementById("destino");
const resumoDestino = document.getElementById("resumo-destino");

inputDestino.addEventListener("input", () => {
    if (inputDestino.value.trim() !== "") {
        resumoDestino.innerText = inputDestino.value;
    } else {
        resumoDestino.innerText = "-";
    }
});


// MANIPULANDO A DISTÂNCIA E SEUS VALORES FIXOS E VARIÁVEIS
const inputDistancia = document.getElementById("distancia");
const resumoDistancia = document.getElementById("resumo-distancia");


inputDistancia.addEventListener("change", () => {
    const km = Number(inputDistancia.value);

    const fixo = 50;
    const variavel = 4;
    const total = fixo + (km * variavel)

    console.log(`O valor aproximado é R$ ${total}`)

    if (km > 0) {
        resumoDistancia.innerText = inputDistancia.value;
    } else {
        resumoDistancia.innerText = "-";
    }
});


// MANIPULANDO A DESCRIÇÃO DOS ITENS
const itens = document.getElementById("itens");
const resumoItens = document.getElementById("resumo-itens");


itens.addEventListener("input", () => {
    if (itens.value.trim() !== "") {
        resumoItens.innerText = itens.value;
    } else {
        resumoItens.innerText = "-";
    }
});


// MANIPULANDO O FORMULÁRIO PARA ENVIAR AO WHATSAPP
const formulario = document.getElementById("formulario-frete");


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const origem = document.getElementById("resumo-origem").innerText;
    const destino = document.getElementById("resumo-destino").innerText;
    const distancia = document.getElementById("resumo-distancia").innerText;
    const itens = document.getElementById("resumo-itens").innerText;

    const mensagem = `Olá Luciano, Gostaria de solicitar um orçamento! \n
    *Origem:* ${origem}\n
    *Destino:* ${destino}\n
    *Distância:* ${distancia}\n
    *Itens:* ${itens} `

    const mensagemFinal = encodeURIComponent(mensagem)

    const numero = "5561984184897"

    window.open(`https://wa.me/${numero}?text=${mensagemFinal}`, "_blank")
});