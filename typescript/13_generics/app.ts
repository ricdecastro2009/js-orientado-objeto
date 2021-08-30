function indentity<T>(arg: T): string{
    console.log(typeof arg);
    console.log(arg.toString())
    return arg.toString();
}


indentity("Ricardo");
indentity(5);
indentity(true);

// tbm é possível condicionar o tipoi de saída veja exemplo abaixo
indentity<string>("Ricardo");
indentity<number>(2);
indentity<boolean>(true);