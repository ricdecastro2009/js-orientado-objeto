function indentity(arg) {
    console.log(typeof arg);
    console.log(arg.toString());
    return arg.toString();
}
indentity("Ricardo");
indentity(5);
indentity(true);
// tbm é possível condicionar o tipoi de saída veja exemplo abaixo
indentity("Ricardo");
indentity(2);
indentity(true);
