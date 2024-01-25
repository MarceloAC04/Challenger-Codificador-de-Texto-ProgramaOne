function codificadorTexto() {
    const text = document.getElementById("input");
    const character = text.value.split("")

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

function escreveCodificado() {
    const resultado = document.getElementById("show-result")
    const btnCopiar = document.querySelector(".btn-copy");
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
    console.log(text);
    return text;
}

function escreveDecodificado() {
    const resultado = document.getElementById("show-result")
    const btnCopiar = document.querySelector(".btn-copy");
    btnCopiar.classList.remove("btn-invisible");
    
    resultado.textContent = decodificadorTexto();
}
