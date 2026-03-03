// Creando un objeto para el restaurante daniela

let cliente = {
    nombre: "Eder",
    dinero: 50,
    hambre: 80
};


//Creamos las funciones

function ordenarComida(cliente) {
    console.log(cliente.nombre + " está ordenando comida ");

    cliente.hambre = cliente.hambre - 30;
}

function pagar(cliente) {
    console.log(cliente.nombre + " está pagando");

    cliente.dinero = cliente.dinero - 20;
}

function mostrarEstado(cliente) {
    console.log("---- ESTADO DEL CLIENTE ----");
    console.log("Nombre:", cliente.nombre);
    console.log("Dinero:", cliente.dinero);
    console.log("Hambre:", cliente.hambre);
}


// SIMULACIÓN

mostrarEstado(cliente);

ordenarComida(cliente);
pagar(cliente);

mostrarEstado(cliente);