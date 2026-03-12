
import { menu } from "./menu.js";

// Contar total de platos (suma de stock)
export function contarPlatos() {
    return menu.reduce((total, plato) => total + plato.stock, 0);
}


// Buscar plato por nombre
export function buscarPlatoPorNombre(nombre) {
    return menu.find(p =>
        p.nombre.toLowerCase() === nombre.toLowerCase()
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


// Vender plato asincrónico
export async function venderPlatoAsync(nombre, cantidad) {

    const resultado = venderPlato(nombre, cantidad);
    if (
        resultado === "El plato no existe" ||
        resultado === "Plato agotado" ||
        resultado === "Stock insuficiente" ||
        resultado === "Cantidad inválida" ||
        resultado === "Debe ingresar el nombre del plato"
    ) {
        throw new Error(resultado);
    }

    try {
        const respuesta = await simularRespuestaServidor(resultado);
        return respuesta;
    } catch (error) {
        const plato = buscarPlatoPorNombre(nombre);
        if (plato) {
            plato.stock += cantidad; // revertimos el descuento de stock
        }
        throw new Error(error);
    }
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

export function simularRespuestaServidor(resultado) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const falla = Math.random() < 0.3;

            if (falla) {
                reject("Error del servidor simulado.");
            } else {
                resolve(resultado);
            }

        }, 2000);

    });

}