function extend(Filho, Pai){
    let F = function(){}
    F.prototype = Pai.prototype;
    Filho.prototype = new F();
}


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

// construtor temporário por função.
extend(Trem, Veiculo);
extend(Carro, Veiculo);


let tremBala = new Trem('Trem Bala 3');
let trem = new Trem('Trem Normal');
let ferrari = new Carro();

Carro.prototype.ligar = function(){
    console.log("O Carro ligou");
}

Trem.prototype.ligar = function(){
    console.log("O Trem ligou");
}


tremBala.ligar();
trem.ligar();
ferrari.ligar();

// a Solução foi utilizar um construtor temporário.

