function extend(Filho, Pai){
    let paiProto = Pai.prototype;
    let filhoProto = Filho.prototype;
    for(let i in paiProto){
        filhoProto[i] = paiProto[i]
    }
    //Filho tem acesso ao objeto do pai.
    filhoProto.uber = paiProto;
}


function Veiculo(){}

Veiculo.prototype.carenagem = 'aço',
Veiculo.prototype.itens = ['Teto solar', 'Vidro elétrico', 'Motor Turbo']
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

//Adicionando itens aos itens
Trem.prototype.itens.push('Janelas fixas');


let tremBala = new Trem('Trem Bala 3');
let trem = new Trem('Trem Normal');
let ferrari = new Carro();

Carro.prototype.ligar = function(){
    console.log("O Carro ligou");
}

Trem.prototype.ligar = function(){
    console.log("O Trem ligou");
}

console.log(trem);

tremBala.ligar();
trem.ligar();
ferrari.ligar();

// a Solução foi utilizar um construtor temporário.

