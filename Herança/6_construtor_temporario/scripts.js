

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

// copiando só o prototype em vez de instanciar uma classe.
Trem.prototype = Veiculo.prototype;

// construtor temporátio
let F = function(){}
F.prototype = Veiculo.prototype;
Carro.prototype = new F();

let tremBala = new Trem('Trem Bala 3');
let trem = new Trem('Trem Normal');
let ferrari = new Carro();

Carro.prototype.ligar = function(){
    console.log("O Carro ligou");
}


tremBala.ligar();
trem.ligar();
ferrari.ligar();

// a Solução foi utilizar um construtor temporário.

