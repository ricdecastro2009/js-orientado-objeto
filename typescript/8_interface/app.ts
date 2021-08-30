function imprimirDados(obj: {nome: string, idade:number}){
    console.log(`Esta pessoa se chama ${obj.nome} e tem ${obj.idade} anos`);
}

let pessoa1 = {nome: "Ricardo", idade: 31}
imprimirDados(pessoa1);

let pessoa2 = {nome: "Joao", idade: 35}
imprimirDados(pessoa2);