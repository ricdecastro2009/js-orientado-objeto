

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
Carro.prototype = Veiculo.prototype;

let tremBala = new Trem('Trem Bala 3');
let trem = new Trem('Trem Normal');
let ferrari = new Carro();

tremBala.ligar();
trem.ligar();
ferrari.ligar();

console.log(tremBala.carenagem);


// Dessa forma é mais performático pois eu copio o prototype e não crio uma nova instancia.
//***utilizar dessa form apenas quando não precisa mudar métodos ou propriedades;







