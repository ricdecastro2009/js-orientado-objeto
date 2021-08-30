class Humano {
    nome:string;
    idade:number;
    
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentarHumano(){
        return `o nome desse humano é ${this.nome} e ele tem ${this.idade}`;
    }

}

let ricardo = new Humano('Ricardo', 31);
console.log(ricardo);
console.log(ricardo.apresentarHumano());