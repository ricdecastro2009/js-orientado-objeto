

function Veiculo(){}

Veiculo.prototype.carenagem = 'aço',
Veiculo.prototype.ligar = function(){
    console.log("O veículo ligou");
}

function Trem(tipo){
    this.tipo = tipo;
}
Trem.prototype.vagoes = 50;


function Carro(){}
Carro.prototype.pneus = 4;

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let tremBala = new Trem('Trem Bala 3');
let trem = new Trem('Trem Normal');
let ferrari = new Carro();

tremBala.ligar();
trem.ligar();
ferrari.ligar();


// Dessa forma é mais performático pois eu estou alocando os objetos apenas no prototype.







