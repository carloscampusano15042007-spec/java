// Creando un objeto para el restaurante daniela

let cliente = {
    nombre: "Eder",
    dinero: 50,
    hambre: 80
};

// Creando funcion ordenar comida

function ordenarComida(cliente) {
    console.log(cliente.nombre + " está ordenando comida ");

    cliente.hambre = cliente.hambre - 30;
}

function pagar(cliente) {
    console.log(cliente.nombre + " esta pagando la comida");
    cliente.dinero = cliente.dinero - 15;

}

function estadoCliente(cliente) {
    console.log("-----------ESTADO CLIENTE -----------");
    console.log("nombre:" + cliente.nombre);
    console.log("dinero:" + cliente.dinero);
    console.log("hambre:" + cliente.hambre);
    console.log("----------VUELVA PRONTO, MUCHAS GRACIAS -----------");
}

//Mostramos el estado del cliente despues de ordenar comida y pagar

ordenarComida(cliente);
pagar(cliente);
estadoCliente(cliente);