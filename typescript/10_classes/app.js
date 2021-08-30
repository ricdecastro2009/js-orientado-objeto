var Humano = /** @class */ (function () {
    function Humano(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Humano.prototype.apresentarHumano = function () {
        return "o nome desse humano \u00E9 " + this.nome + " e ele tem " + this.idade;
    };
    return Humano;
}());
var ricardo = new Humano('Ricardo', 31);
console.log(ricardo);
console.log(ricardo.apresentarHumano());
