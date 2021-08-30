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

class Ninja extends Humano{
    classe:string;
    
    constructor(nome:string, idade: number, classe: string){
        super(nome, idade);
        this.classe = classe;
    }

    atirarEstrela():void{
        console.log("O Ninja atirou");
    }
}

let ricardo = new Ninja('Ricardo', 31, 'Hokage');
console.log(ricardo);
console.log(ricardo.apresentarHumano());
ricardo.atirarEstrela();