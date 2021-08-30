function cumprimento(saudacao: string, nome: string) : string {
    return `Olá ${saudacao} ${nome} Tenha um bom dia`;
}

console.log(cumprimento("Sr.", "Ricardo"));



//em funções parametros opcionais sempre vir depois dos obrigatórios.
function descreverCarro(marca: string, aro?: number){
    if(aro){
        console.log(`o Carro é da marca ${marca} e tem um aro ${aro}`);
    }else{
        console.log(`o Carro é da marca ${marca}`)
    }
}
descreverCarro("BMW",20);
descreverCarro("Ferrari");
