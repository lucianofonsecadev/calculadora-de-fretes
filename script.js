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


// MANIPULANDO OS CHECKBOX DA ÁREA ACESSO
const checkboxesAcesso = document.querySelectorAll('input[name="acesso"]');
const resumoAcesso = document.getElementById("resumo-acesso");

function atualizarAcesso() {
    const selecionados = [];

    // Percorremos cada caixinha pra ver se ela está marcada
    checkboxesAcesso.forEach(checkbox => {
        if (checkbox.checked) {
            selecionados.push(checkbox.value);
        }
    });

    // Se marcou alguma coisa, junta com vírgula;
    // se não marcou nada, deixa traço
    if (selecionados.length > 0) {
        resumoAcesso.innerText = selecionados.join(", ");
    } else {
        resumoAcesso.innerText = "-";
    }
}

// Escuta a mudança de clique em cada checkbox
checkboxesAcesso.forEach(checkbox => {
    checkbox.addEventListener("change", atualizarAcesso);
});


// MANIPULANDO OS INPUT RADIO DA AREA AJUDA
const radiosAjuda = document.querySelectorAll('input[name="ajuda"]');
const resumoAjuda = document.getElementById("resumo-ajuda");
const obsAjuda = document.getElementById("obs-ajuda");


// Função para atualizar o texto do resumo
function atualizarAjuda() {
    // Busca apenas aquele que estiver com a bolinha marcada (:checked)
    const radioMarcado = document.querySelector('input[name="ajuda"]:checked');
    
    if (radioMarcado) {
        resumoAjuda.innerText = radioMarcado.value;
    }
};

// Fica escutando a troca de clique nos botões de rádio
radiosAjuda.forEach(radio => {
    radio.addEventListener("change", atualizarAjuda);
});


// MANIPULANDO O INPUT DATE E INPUT TIME
const data = document.getElementById("data");
const hora = document.getElementById("hora");
const dataHora = document.getElementById("resumo-data-hora");

function atualizarDataHora() {
    if(data.value && hora.value) {
    const [ano, mes, dia] = data.value.split("-");

    dataHora.innerText = `${dia}/${mes}/${ano} às ${hora.value}`;
    } else {
        dataHora.innerText = "-"
    }
};

data.addEventListener("change", atualizarDataHora)
hora.addEventListener("change", atualizarDataHora)



// MANIPULANDO O FORMULÁRIO PARA ENVIAR AO WHATSAPP ^^
const formulario = document.getElementById("formulario-frete");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const origem = document.getElementById("resumo-origem").innerText;
    const destino = document.getElementById("resumo-destino").innerText;
    const distancia = document.getElementById("resumo-distancia").innerText;
    const itens = document.getElementById("resumo-itens").innerText;
    const ajuda = document.getElementById("resumo-ajuda").innerText;
    const acesso = document.getElementById("resumo-acesso").innerText;
    const data = document.getElementById("resumo-data-hora").innerText;
    const obsAjuda = document.getElementById("obs-ajuda").value;

    const mensagem = `Olá Luciano, Gostaria de solicitar um orçamento! \n
    *Origem:* ${origem}\n
    *Destino:* ${destino}\n
    *Distância:* ${distancia}\n
    *Itens:* ${itens}\n
    *Ajuda:* ${ajuda}\n
    *Acesso:* ${acesso}\n 
    *Observação:* ${obsAjuda}`

    const mensagemFinal = encodeURIComponent(mensagem)

    const numero = "5561984184897"

    window.open(`https://wa.me/${numero}?text=${mensagemFinal}`, "_blank")
});