let cliente = {
    nombre: "Carlos",
    dinero: 50,
    hambre: 100

};

//funcion ordenar comida(cliente)
function ordenarComida(cliente) {
    console.log(cliente.nombre + "esta ordenando comida");
    cliente.hambre = cliente.hambre - 20;

}

