
import { menu } from "./menu.js";

export function contarplatos() {
    let totalplatos = menu.reduce((total, plato) => total + plato.stock, 0);
    console.log("Total de platos: " + totalplatos);
    const total = document.getElementById("total");
    total.innerHTML = `Total de platos: ${totalplatos}`;
}
//buscar plato por su nombre usando find
export function buscarplatopornombre(nombre) {

    const plato = menu.find(p =>
        p.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (!plato) {
        renderLista("Resultado de búsqueda", ["No encontrado"]);
        return;
    }

    const texto = `${plato.nombre} - S/ ${plato.precio} - Stock: ${plato.stock}`;

    renderLista("Resultado de búsqueda", [texto]);
}

//Funcion para filtrar stockbajo
export function filtrarStockBajo() {

    const resultado = menu.filter(plato => plato.stock <= 3);

    const lista = resultado.map(plato =>
        `${plato.nombre} - Stock: ${plato.stock}`
    );

    renderLista("Platos con stock bajo", lista);
}

// RESUMEN DEL MENU (MAP)
export function resumenMenu() {

    const resumen = menu.map(plato =>
        `${plato.nombre} - S/ ${plato.precio}`
    );

    renderLista("Resumen del menú", resumen);
}

//Mostrar el resumen


// VENDER PLATO 

export function venderPlato(nombre, cantidad) {

    const resultado = menu.filter(p =>
        p.nombre.toLowerCase() === nombre.toLowerCase()
    );

    // validar nombre plato
    if (!nombre) {
        alert("Debe ingresar el nombre del plato");
        return;
    }

    // validar cantidad
    if (cantidad <= 0) {
        alert("Cantidad inválida");
        return;
    }

    // validar si el plato existe
    if (resultado.length === 0) {
        alert("El plato no existe en el menú");
        return;
    }

    const plato = resultado[0];

    // validar si está agotado
    if (plato.stock === 0) {
        alert("No disponible, plato agotado");
        return;
    }

    // validar si hay suficiente stock
    if (cantidad > plato.stock) {
        alert("Stock insuficiente");
        return;
    }

    // realizar venta
    plato.stock = plato.stock - cantidad;

    alert("Venta realizada de " + cantidad + " " + plato.nombre);

    // actualizar menú
    renderMenu();

    // verificar estado general
    verificarEstadoGeneral();
}

// verifica estado general

export function verificarEstadoGeneral() {

    let agotados = 0
    let bajo = 0

    for (let i = 0; i < menu.length; i++) {

        if (menu[i].stock === 0) {
            agotados++
        }
        else if (menu[i].stock <= 3) {
            bajo++
        }

    }

    const estado = document.getElementById("estadoGeneral")

    if (agotados > 0) {
        estado.innerHTML = "⚠ Hay platos agotados"
    }
    else if (bajo > 0) {
        estado.innerHTML = "⚠ Hay platos con stock bajo"
    }
    else {
        estado.innerHTML = "✅ Todo disponible"
    }

}
