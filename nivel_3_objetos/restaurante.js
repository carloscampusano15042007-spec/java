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

