function imprimirDados(obj) {
    console.log("Esta pessoa se chama " + obj.nome + " e tem " + obj.idade + " anos");
}
var pessoa1 = { nome: "Ricardo", idade: 31 };
imprimirDados(pessoa1);
var pessoa2 = { nome: "Joao", idade: 35 };
imprimirDados(pessoa2);
