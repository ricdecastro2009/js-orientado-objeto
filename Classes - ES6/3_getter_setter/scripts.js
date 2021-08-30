let Humano = class{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }
    nomeDaPessoa(){
        return "O nome da pessoa é: "+ this.nome
    }

    set mudarNomeDaPessoa(novoNome){
        this.nome = "Sr. "+ novoNome
    }

    get obterNomePessoa(){
        return "O nome da pessoa é: " + this.nome;
    }
}


let ricardo = new Humano("Ricardo", 31);
console.log(typeof Humano);
console.log(ricardo);
console.log(ricardo.nomeDaPessoa())

ricardo.mudarNomeDaPessoa = "Arthuro";
console.log(ricardo.nome);
console.log(ricardo.obterNomePessoa)



