

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

Carro.prototype.ligar = function(){
    console.log("O Carro ligou");
}

tremBala.ligar();
trem.ligar();
ferrari.ligar();


// Quando utilizamos o prototype chain Não podemos alterar métodos nem propriedades pois ele referencia o mesmo objeto de prototype.
//nesse caso ele mostra para todas as instancias "O Carro ligou" ai nesse caso o ideal é utilizar o new e instanciar objetos diferentes,

