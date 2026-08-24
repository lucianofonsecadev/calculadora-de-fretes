// MANIPULANDO A ORIGEM E O RESUMO ORIGEM
const inputOrigem = document.getElementById("origem")
const resumoOrigem = document.getElementById("resumo-origem")

inputOrigem.addEventListener("input", () => {
    if (inputOrigem.value.trim() !== "") {
        resumoOrigem.innerText = inputOrigem.value;
    } else {
        resumoOrigem.innerText = "-"
    }
})

// MANIPULANDO O DESTINO E O RESUMO DESTINO
const inputDestino = document.getElementById("destino");
const resumoDestino = document.getElementById("resumo-destino");

inputDestino.addEventListener("input", () => {
    if (inputDestino.value.trim() !== "") {
        resumoDestino.innerText = inputDestino.value;
    } else {
        resumoDestino.innerText = "-"
    }
});


//MANIPULANDO A DISTÂNCIA E SEUS VALORES FIXOS E VARIÁVEIS
const inputDistancia = document.getElementById("distancia");
const resumoDistancia = document.getElementById("resumo-distancia")

inputDistancia.addEventListener("change", () => {
    const km = Number(inputDistancia.value);

    if(km > 0) {
        const fixo = 50;
        const valorPorKm = 4;
        const total = fixo + (km * valorPorKm);

        console.log(`O valor aproximado é ${total}`)

        resumoDistancia.innerText = inputDistancia.value;
    }
})


//MANIPULANDO A DESCRIÇÃO DOS ITENS
const itens = document.getElementById("itens")
const resumoItens = document.getElementById("resumo-itens")

itens.addEventListener("input", () => {
    resumoItens.innerText = itens.value;
})


// MANIPULANDO O FORMULÁRIO PARA ENVIAR AO WHATSAPP
const formulario = document.getElementById("formulario-frete")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const origem = document.getElementById("origem")
    const destino = document.getElementById("destino")
    const distancia = document.getElementById("distancia")
    const itens = document.getElementById("itens")

    const mensagem = `Olá Luciano, gostaria de um orçamento!
    %0A*Retirada:* ${origem}
    %0A*Destino: ${destino}
    %0A*Distância: ${distancia}
    %0A*Itens: ${itens}`

    const numWhats = "5561984184897"

    window.open(`https://wa.me/${numWhats}?text=${mensagem}`, "_blank");
});