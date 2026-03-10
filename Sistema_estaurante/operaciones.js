
import { menu } from "./menu.js";

// Contar total de platos (suma de stock)
export function contarPlatos() {
    return menu.reduce((total, plato) => total + plato.stock, 0);
}


// Buscar plato por nombre
export function buscarPlatoPorNombre(nombre) {
    return menu.find(p =>
        p.nombre.toLowerCase() === nombre.toLowerCase() && p.stock > 0
    );
}


// Filtrar platos con stock bajo
export function filtrarStockBajo() {
    return menu.filter(plato => plato.stock <= 3);
}


// Obtener resumen del menú
export function resumenMenu() {
    return menu.map(plato =>
        `${plato.nombre} - S/ ${plato.precio}`
    );
}


// Vender plato
export function venderPlato(nombre, cantidad) {

    if (!nombre) return "Debe ingresar el nombre del plato";

    if (cantidad <= 0) return "Cantidad inválida";

    const plato = buscarPlatoPorNombre(nombre);

    if (!plato) return "El plato no existe";

    if (plato.stock === 0) return "Plato agotado";

    if (cantidad > plato.stock) return "Stock insuficiente";

    plato.stock -= cantidad;

    return `Venta realizada de ${cantidad} ${plato.nombre}`;
}


// Calcular estado del plato
export function calcularEstadoPlato(plato) {

    if (plato.stock === 0) return "agotado";

    if (plato.stock <= 3) return "bajo";

    return "normal";
}


// Verificar estado general del menú
export function verificarEstadoGeneral() {

    let agotados = 0;
    let bajos = 0;

    for (let i = 0; i < menu.length; i++) {

        if (menu[i].stock === 0) agotados++;

        else if (menu[i].stock <= 3) bajos++;
    }

    if (agotados > 0) return "⚠ Hay platos agotados";

    if (bajos > 0) return "⚠ Hay platos con stock bajo";

    return "✅ Todo disponible";
}