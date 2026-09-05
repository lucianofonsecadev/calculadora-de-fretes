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

// FUNÇÃO PARA VERIFICAR SE TEM ERRO EM CADA SEÇÃO

function validarFormulario() {
    const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio")
    let formularioValido = true;

    camposObrigatorios.forEach(campo => {
        let estaValido = true;

        //radio e checkbox
        const ajudaeAcesso = campo.querySelectorAll(
            'input[type="radio"], input[type="checkbox"]'
        );

        if(ajudaeAcesso.length > 0) {
            const marcada = campo.querySelector(
                'input[name="ajuda"]:checked, input[name="acesso"]:checked'
            );
            if(!marcada) {
                estaValido = false;
            };
        };

        // campos normais
        const camposNormais = campos.querySelectorAll(
            'input[type="text"]:not(#obs-ajuda), ' +
            'input[type="number"], '+
            'input[type="date"], '+
            'input[type="time"], '+
            'textarea'
        ); 

        camposNormais.forEach(campo => {
            if(campo.value.trim() === "") {
                estaValido = false;
            }
        });

        // campo ajudantes
        const radioAjuda = campo.querySelector('input[name="ajuda"]:checked');
        const obsAjuda = campo.querySelector("#obs-ajuda");

        if(radioAjuda && radioAjuda.value === "Sim, preciso") {
            if(obsAjuda && obsAjuda.value.trim() === "") {
                estaValido = false;
            }
        };
        
        // mensagem de erro 
        let spanErro = campo.querySelector(".secao-erro");
        if(estaValido === false) {
            if(!spanErro) {
                spanErro = document.createElement("span");
                spanErro.classList.add("secao-erro");
                spanErro.innerText = "Preencha este campo para prosseguir!";
                
                campo.appendChild(spanErro);
            };
            campo.classList.add("secao-com-erro");
        }

        if(formularioValido) {
            campo.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        formularioValido = false;

    }) else {
        if(spanErro) {
            spanErro.remove();
        }
        campo.classList.add("secao-com-erro");
    }

    return formularioValido;    

}
// ENVIO DO FORMULÁRIO 

const formulario = document.getElementById("formulario-frete")
    
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const origem = document.getElementById("resumo-origem").innerText;

    const destino = document.getElementById("resumo-destino").innerText;

    const distancia = document.getElementById("resumo-distancia").innerText;

    const itens = document.getElementById("resumo-itens").innerText;

    const ajuda = document.getElementById("resumo-ajuda").innerText;

    const acesso = document.getElementById("resumo-acesso").innerText;

    const data = document.getElementById("resumo-data-hora").innerText;

    const ajudante = document.getElementById("resumo-obs-ajuda").innerText;

    const mensagem = "Olá Luciano, Gostaria de solicitar um orçamento!\n\n" +
            `*Origem:* ${origem}\n` +
            `*Destino:* ${destino}\n` +
            `*Distância:* ${distancia}\n` +
            `*Itens:* ${itens}\n` +
            `*Ajuda:* ${ajuda}\n` +
            `*Ajudante:* ${ajudante}\n` +
            `*Acesso:* ${acesso}\n` +
            `*Data:* ${data}`;

        const mensagemFinal = encodeURIComponent(mensagem);

        const numero = "5561984184897";

        window.open(`https://wa.me/${numero}?text=${mensagemFinal}`, "_blank");
})