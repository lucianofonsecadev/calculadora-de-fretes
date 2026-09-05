// ORIGEM

const inputOrigem = document.getElementById("origem");
const resumoOrigem = document.getElementById("resumo-origem");

inputOrigem.addEventListener("input", () => {
    const origem = inputOrigem.value.trim();
    if(origem !== "") {
        resumoOrigem.innerText = origem;
    } else {
        resumoOrigem.innerText = "-";
    }
});

// DESTINO

const inputDestino = document.getElementById("destino");
const resumoDestino = document.getElementById("resumo-destino");

inputDestino.addEventListener("input", () => {
    const destino = inputDestino.value.trim();
    if(destino !== "") {
        resumoDestino.innerText = destino;
    } else {
        resumoDestino.innerText = "-";
    }
});

// DISTÂNCIA   

const inputDistancia = document.getElementById("distancia");
const resumoDistancia = document.getElementById("resumo-distancia");

inputDistancia.addEventListener("input", () => {
    const km = Number(inputDistancia.value);
    if(km > 0) {
        const fixo = 50;
        const variavel = 4;
        const total = fixo + (km * variavel);

        resumoDistancia.innerText = total;
    } else {
        resumoDistancia.innerText = "-";
    }
});

// ITENS

const inputItens = document.getElementById("itens");
const resumoItens = document.getElementById("resumo-itens");

inputItens.addEventListener("input", () => {
    const itens = inputItens.value.trim();
    if(itens !== "") {
        resumoItens.innerText = itens;
    } else {
        resumoItens.innerText = "-";
    }
});

// ACESSO - CHECKBOXES

const checkboxesAcesso = document.querySelectorAll('input[name="acesso"]');
const resumoAcesso = document.getElementById("resumo-acesso");

function atualizarAcesso() {
    const selecionados = [];
    checkboxesAcesso.forEach(checkbox => {
        if(checkbox.checked) {
            selecionados.push(checkbox.value);
        }
    })
    if(selecionados.length > 0) {
        resumoAcesso.innerText = selecionados.join(", ");
    } else {
        resumoAcesso.innerText = "-";
    }
};

checkboxesAcesso.forEach(checkbox => {
    checkbox.addEventListener("change", atualizarAcesso);
});

// AJUDA - RADIOS

const radiosAjuda = document.querySelectorAll('input[name="ajuda"]');
const resumoAjuda = document.getElementById("resumo-ajuda");

function atualizarAjuda() {
    const selecionada = document.querySelector('input[name="ajuda"]:checked');
    if(selecionada) {
        resumoAjuda.innerText = selecionada.value;
    } else {
        resumoAjuda.innerText = "-";
    }
};

radiosAjuda.forEach(radio => {
    radio.addEventListener("change", atualizarAjuda);
});

// QUANTIDADE DE AJUDANTES

const inputObsAjuda = document.getElementById("obs-ajuda");
const resumoObsAjuda = document.getElementById("resumo-obs-ajuda");

inputObsAjuda.addEventListener("input", () => {
    const ajudante = inputObsAjuda.value.trim();
    if(ajudante !== "") {
        resumoObsAjuda.innerText = ajudante;
    } else {
        resumoObsAjuda.innerText = "-";
    }
});

// DATA E HORA

const data = document.getElementById("data");
const hora = document.getElementById("hora");
const dataHora = document.getElementById("resumo-data-hora");

function atualizarDataHora() {
    if(data.value && hora.value) {
        const [ano, mes, dia] = data.value.split("-");
        dataHora.innerText = `${dia}/${mes}/${ano} às ${hora.value}`;
    } else {
        dataHora.innerText = "-";
    }
};

hora.addEventListener("change", atualizarDataHora);
data.addEventListener("change", atualizarDataHora);