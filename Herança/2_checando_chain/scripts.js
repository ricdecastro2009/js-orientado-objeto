

function Veiculo(){
    this.carenagem = 'aço',
    this.ligar = function(){
        console.log("O veículo ligou");
    }
}

function Trem(tipo){
    this.tipo = tipo;
    this.vagoes = 50;
}

function Carro(){
    this.pneus = 4;
}

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let tremBala = new Trem('Trem Bala 3');
let ferrari = new Carro();

console.log(tremBala instanceof Trem);
console.log(ferrari instanceof Carro);

console.log(tremBala instanceof Veiculo);
console.log(ferrari instanceof Veiculo);

console.log(tremBala instanceof Object);
console.log(ferrari instanceof Object);


// Verificando as instancias de cara objeto.
// Foi bifurcado cada objeto.





