
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

    // Validaciones de tipo de entrada
    if (typeof nombre !== "string" || nombre.trim() === "") {
        return "El nombre del plato debe ser un texto válido";
    }
    if (typeof cantidad !== "number" || isNaN(cantidad)) {
        return "La cantidad debe ser un número";
    }

    if (!nombre) return "Debe ingresar el nombre del plato";

    if (cantidad <= 0) return "Cantidad inválida";

    const plato = buscarPlatoPorNombre(nombre);

    if (!plato) return "El plato no existe";

    if (plato.stock === 0) return "Plato agotado";

    if (cantidad > plato.stock) return "Stock insuficiente";

    plato.stock -= cantidad;

    return `Venta Exitosa de ${cantidad} ${plato.nombre}`;
}


// Vender plato asincrónico
export async function venderPlatoAsync(nombre, cantidad) {

    // Validaciones de tipo de entrada
    if (typeof nombre !== "string" || nombre.trim() === "") {
        throw new ErrorNegocio("El nombre del plato debe ser un texto válido");
    }
    if (typeof cantidad !== "number" || isNaN(cantidad)) {
        throw new ErrorNegocio("La cantidad debe ser un número");
    }

    if (!nombre) throw new ErrorNegocio("Debe ingresar el nombre del plato");
    if (cantidad <= 0) throw new ErrorNegocio("Cantidad inválida");

    const plato = buscarPlatoPorNombre(nombre);
    if (!plato) throw new ErrorNegocio(`El plato '${nombre}' no existe en nuestro menú.`);
    if (plato.stock === 0) throw new ErrorNegocio(`El plato '${plato.nombre}' se encuentra totalmente agotado.`);
    if (cantidad > plato.stock) throw new ErrorNegocio(`Stock insuficiente. Solo quedan ${plato.stock} unidades de '${plato.nombre}', y pediste ${cantidad}.`);

    // Realizar la venta en memoria
    plato.stock -= cantidad;
    const mensajeVenta = `Venta Exitosa de ${cantidad} ${plato.nombre}`;

    try {
        const respuesta = await simularRespuestaServidor(mensajeVenta);
        return respuesta;
    } catch (error) {
        // En caso de error del servidor, revertir stock
        plato.stock += cantidad; 
        
        // Mantener como "Error" normal para fallos de servidor
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

export class ErrorNegocio extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorNegocio";
    }
}
