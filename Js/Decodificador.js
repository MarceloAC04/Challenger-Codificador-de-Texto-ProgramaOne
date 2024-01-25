const resultado = document.getElementById("show-result")
const btnCopiar = document.querySelector(".btn-copy");

function validarTexto(texto) {
    if (texto.length == 0) {
        alert('Digite algum texto!')
        return false;
    } else if(/[A-Z-À-Ú-à-ú]/.test(texto)) {
        alert('Apenaas letras minúsculas e sem acento!')
        return false;
    }
    return true;
}


function codificadorTexto() {
    const text = document.getElementById("input").value;
    const character = text.split("")

    character.forEach((item, i) => {
        if(item == "a") {
            character[i] = "ai";

        } else if(item == "e") {
            character[i] = "enter";

        } else if(item == "i") {
            character[i] = "imes";

        } else if(item == "o") {
            character[i] = "ober";

        } else if(item == "u") {
            character[i] = "ufat";
        }
    });
    return character.join("");
}

function escreverCodificado() {
    if (!validarTexto(document.getElementById("input").value)) {
        return;
    }
    btnCopiar.classList.remove("btn-invisible");
    resultado.textContent = codificadorTexto();
}

function decodificadorTexto() {
    var text = document.getElementById("input").value;
    const code = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    for(var i = 0; i < code.length; i++) {
        if(text.includes(code[i][1])) {
            text = text.replaceAll(code[i][1], code[i][0]);
        }
    }
    return text;
}

function escreverDecodificado() {
    if (!validarTexto(document.getElementById("input").value)) {
        return;
    }
    btnCopiar.classList.remove("btn-invisible");
    resultado.textContent = decodificadorTexto();
}

function copy() {
    inputTexto = document.getElementById("input");
    inputTexto.select();
    document.execCommand("copy");
    inputTexto.value = "";
    inputTexto.focus();
    resultado.textContent = "";
    btnCopiar.classList.add("btn-invisible");
}