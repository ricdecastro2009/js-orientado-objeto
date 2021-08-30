function cumprimento(saudacao, nome) {
    return "Ol\u00E1 " + saudacao + " " + nome + " Tenha um bom dia";
}
console.log(cumprimento("Sr.", "Ricardo"));
function descreverCarro(marca, aro) {
    if (aro) {
        console.log("o Carro \u00E9 da marca " + marca + " e tem um aro " + aro);
    }
    else {
        console.log("o Carro \u00E9 da marca " + marca);
    }
}
descreverCarro("BMW", 20);
descreverCarro("Ferrari");
