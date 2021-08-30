let Humano = class{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }
    nomeDaPessoa(){
        return "O nome da pessoa é: "+ this.nome
    }
}


let Ricardo = new Humano("Ricardo", 31);
console.log(typeof Humano);
console.log(Ricardo);
console.log(Ricardo.nomeDaPessoa())



