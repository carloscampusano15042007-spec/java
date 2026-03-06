let cliente = {
    nombre: "Carlos",
    dinero: 50,
    hambre: 100

};

//funcion ordenar comida(cliente)
function ordenarComida(cliente) {
    console.log(cliente.nombre + " esta ordenando comida");
    cliente.hambre = cliente.hambre - 20;

}

function pagar(cliente) {
    console.log(cliente.nombre + " esta pagando la comida");
    cliente.dinero = cliente.dinero - 10;
}

function estado(cliente) {
    console.log(cliente.nombre + "");
    cliente.hambre = cliente.hambre - 20;
}

function estadoCliente(cliente) {
    console.log("  ESTADO DEL CLIENTE ");
    console.log("nombre: " + cliente.nombre);
    console.log("dinero: " + cliente.dinero);
    console.log("hambre: " + cliente.hambre);
    console.log(" GRACIAS POR SU COMPRA");
}


//simulacion

ordenarComida(cliente);
pagar(cliente);
estadoCliente(cliente);
