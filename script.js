// ========================================
// ORIGEM
// ========================================

const inputOrigem = document.getElementById("origem");
const resumoOrigem = document.getElementById("resumo-origem");

inputOrigem.addEventListener("input", () => {
    if (inputOrigem.value.trim() !== "") {
        resumoOrigem.innerText = inputOrigem.value;
    } else {
        resumoOrigem.innerText = "-";
    }
});


// ========================================
// DESTINO
// ========================================

const inputDestino = document.getElementById("destino");
const resumoDestino = document.getElementById("resumo-destino");

inputDestino.addEventListener("input", () => {
    if (inputDestino.value.trim() !== "") {
        resumoDestino.innerText = inputDestino.value;
    } else {
        resumoDestino.innerText = "-";
    }
});


// ========================================
// DISTÂNCIA
// ========================================

const inputDistancia = document.getElementById("distancia");
const resumoDistancia = document.getElementById("resumo-distancia");

inputDistancia.addEventListener("change", () => {
    const km = Number(inputDistancia.value);

    const fixo = 50;
    const variavel = 4;

    const total = fixo + (km * variavel);

    console.log(`O valor aproximado é R$ ${total}`);

    if (km > 0) {
        resumoDistancia.innerText = inputDistancia.value;
    } else {
        resumoDistancia.innerText = "-";
    }
});


// ========================================
// ITENS
// ========================================

const inputItens = document.getElementById("itens");
const resumoItens = document.getElementById("resumo-itens");

inputItens.addEventListener("input", () => {
    if (inputItens.value.trim() !== "") {
        resumoItens.innerText = inputItens.value;
    } else {
        resumoItens.innerText = "-";
    }
});


// ========================================
// ACESSO - CHECKBOXES
// ========================================

const checkboxesAcesso = document.querySelectorAll('input[name="acesso"]');
const resumoAcesso = document.getElementById("resumo-acesso");

function atualizarAcesso() {
    const selecionados = [];

    checkboxesAcesso.forEach(checkbox => {
        if (checkbox.checked) {
            selecionados.push(checkbox.value);
        }
    });

    if (selecionados.length > 0) {
        resumoAcesso.innerText = selecionados.join(", ");
    } else {
        resumoAcesso.innerText = "-";
    }
}

checkboxesAcesso.forEach(checkbox => {
    checkbox.addEventListener("change", atualizarAcesso);
});


// ========================================
// AJUDA - RADIOS
// ========================================

const radiosAjuda = document.querySelectorAll('input[name="ajuda"]');
const resumoAjuda = document.getElementById("resumo-ajuda");

function atualizarAjuda() {
    const radioMarcado = document.querySelector('input[name="ajuda"]:checked');

    if (radioMarcado) {
        resumoAjuda.innerText = radioMarcado.value;
    } else {
        resumoAjuda.innerText = "-";
    }
}

radiosAjuda.forEach(radio => {
    radio.addEventListener("change", atualizarAjuda);
});


// ========================================
// QUANTIDADE DE AJUDANTES
// ========================================

const inputObsAjuda = document.getElementById("obs-ajuda");
const resumoObsAjuda = document.getElementById("resumo-obs-ajuda");

inputObsAjuda.addEventListener("input", () => {
    if (inputObsAjuda.value.trim() !== "") {
        resumoObsAjuda.innerText = inputObsAjuda.value;
    } else {
        resumoObsAjuda.innerText = "-";
    }
});


// ========================================
// DATA E HORA
// ========================================

const data = document.getElementById("data");
const hora = document.getElementById("hora");
const dataHora = document.getElementById("resumo-data-hora");

function atualizarDataHora() {
    if (data.value && hora.value) {
        const [ano, mes, dia] = data.value.split("-");

        dataHora.innerText = `${dia}/${mes}/${ano} às ${hora.value}`;
    } else {
        dataHora.innerText = "-";
    }
}

data.addEventListener("change", atualizarDataHora);
hora.addEventListener("change", atualizarDataHora);


// ========================================
// VALIDAÇÃO DO FORMULÁRIO
// ========================================

function validarFormulario() {

    const secoesObrigatorias =
        document.querySelectorAll(".campo-obrigatorio");

    let formularioValido = true;

    secoesObrigatorias.forEach(secao => {

        let estaValido = true;


        // ----------------------------------------
        // RADIO E CHECKBOX
        // ----------------------------------------

        const opcoes = secao.querySelectorAll(
            'input[type="checkbox"], input[type="radio"]'
        );

        if (opcoes.length > 0) {

            const opcaoMarcada = secao.querySelector(
                'input[type="checkbox"]:checked, input[type="radio"]:checked'
            );

            if (!opcaoMarcada) {
                estaValido = false;
            }
        }


        // ----------------------------------------
        // CAMPOS NORMAIS
        // ----------------------------------------

        const campos = secao.querySelectorAll(
            'input[type="text"]:not(#obs-ajuda), ' +
            'input[type="number"], ' +
            'input[type="date"], ' +
            'input[type="time"], ' +
            'textarea'
        );

        campos.forEach(campo => {

            if (campo.value.trim() === "") {
                estaValido = false;
            }

        });


        // ----------------------------------------
        // QUANTIDADE DE AJUDANTES
        // ----------------------------------------

        const radioAjuda = secao.querySelector(
            'input[name="ajuda"]:checked'
        );

        const obsAjuda = secao.querySelector("#obs-ajuda");

        if (
            radioAjuda &&
            radioAjuda.value === "Sim, preciso"
        ) {

            if (
                obsAjuda &&
                obsAjuda.value.trim() === ""
            ) {
                estaValido = false;
            }
        }


        // ----------------------------------------
        // MENSAGEM DE ERRO
        // ----------------------------------------

        let spanErro = secao.querySelector(".secao-erro");

        if (!estaValido) {

            if (!spanErro) {

                spanErro = document.createElement("span");

                spanErro.classList.add("secao-erro");

                spanErro.innerText =
                    "Preencha este campo para continuar!";

                secao.appendChild(spanErro);
            }

            secao.classList.add("secao-com-erro");


            // Rola somente até o primeiro erro

            if (formularioValido) {

                secao.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            formularioValido = false;

        } else {

            if (spanErro) {
                spanErro.remove();
            }

            secao.classList.remove("secao-com-erro");
        }

    });

    return formularioValido;
}


// ========================================
// ENVIO DO FORMULÁRIO
// ========================================

const formulario = document.getElementById("formulario-frete");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const estaTudoCerto = validarFormulario();

    if (estaTudoCerto) {

        const origem =
            document.getElementById("resumo-origem").innerText;

        const destino =
            document.getElementById("resumo-destino").innerText;

        const distancia =
            document.getElementById("resumo-distancia").innerText;

        const itens =
            document.getElementById("resumo-itens").innerText;

        const ajuda =
            document.getElementById("resumo-ajuda").innerText;

        const acesso =
            document.getElementById("resumo-acesso").innerText;

        const data =
            document.getElementById("resumo-data-hora").innerText;

        const ajudante =
            document.getElementById("resumo-obs-ajuda").innerText;


        // ----------------------------------------
        // MENSAGEM DO WHATSAPP
        // ----------------------------------------

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

        window.open(
            `https://wa.me/${numero}?text=${mensagemFinal}`,
            "_blank"
        );
    }
});