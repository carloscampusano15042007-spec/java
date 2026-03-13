import { menu, agregarPlatoDemo } from "./menu.js";

import {
    contarPlatos,
    buscarPlatoPorNombre,
    filtrarStockBajo,
    resumenMenu,
    venderPlatoAsync,
    calcularEstadoPlato,
    verificarEstadoGeneral

} from "./operaciones.js";


export function renderMenu() {

    const output = document.getElementById("output");

    let html = "<h3>Menú</h3><ul>";

    for (let i = 0; i < menu.length; i++) {

        const plato = menu[i];

        const clase = calcularEstadoPlato(plato);

        html += `<li class="${clase}">
            ${plato.nombre} - S/ ${plato.precio} - Stock: ${plato.stock}
        </li>`;
    }

    html += "</ul>";

    output.innerHTML = html;

    document.getElementById("estadoGeneral").innerHTML =
        verificarEstadoGeneral();
}


export function renderLista(titulo, lista) {

    const output = document.getElementById("output");

    let html = `<h3>${titulo}</h3><ul>`;

    for (let i = 0; i < lista.length; i++) {
        html += `<li>${lista[i]}</li>`;
    }

    html += "</ul>";

    output.innerHTML = html;
}


export function conectarEventos() {

    document.getElementById("btnMostrar").addEventListener("click", () => {
        renderMenu();
    });


    document.getElementById("btnAgregar").addEventListener("click", () => {

        agregarPlatoDemo();
        renderMenu();

    });


    document.getElementById("btnContar").addEventListener("click", () => {

        const total = contarPlatos();

        document.getElementById("total").innerHTML =
            `Total de platos: ${total}`;

    });


    document.getElementById("btnResumen").addEventListener("click", () => {

        renderLista("Resumen del menú", resumenMenu());

    });


    document.getElementById("btnStockBajo").addEventListener("click", () => {

        const lista = filtrarStockBajo().map(p =>
            `${p.nombre} - Stock: ${p.stock}`
        );

        renderLista("Stock bajo", lista);

    });


    document.getElementById("btnBuscar").addEventListener("click", () => {

        const nombre = document.getElementById("inputBuscar").value.trim();

        const plato = buscarPlatoPorNombre(nombre);

        if (!plato) {

            renderLista("Resultado", ["No encontrado"]);
            return;
        }

        renderLista("Resultado", [
            `${plato.nombre} - S/ ${plato.precio} - Stock: ${plato.stock}`
        ]);

    });

    document.getElementById("btnVender").addEventListener("click", async () => {

        const nombre =
            document.getElementById("nombreVender").value.trim();

        const cantidad =
            Number(document.getElementById("cantidadVender").value);

        // -- VALIDACIONES ANTES DE ENVIAR A OPERACIONES -- //
        // 1. Nombre vacío
        if (nombre) {
            alert("Advertencia: Nombre inválido");
            return;
        }

        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Advertencia: La cantidad debe ser un número mayor a cero");
            return;
        }

        const plato = buscarPlatoPorNombre(nombre);
        if (!plato) {
            alert("Advertencia: El plato no existe");
            return;
        }

        if (cantidad > plato.stock) {
            alert("Advertencia: Stock insuficiente en el menú actual");
            return;
        }

        // -- FIN VALIDACIONES -- //

        try {

            alert("Procesando pedido...");
            document.getElementById("output").innerHTML = "<h3>⏳ Procesando pedido...</h3>";
            renderMenu(); // Muestra el cambio de stock antes de esperar la respuesta del servidor
            const mensaje = await venderPlatoAsync(nombre, cantidad);
            alert(mensaje);

        } catch (error) {

            if (error.name === "ErrorNegocio") {
                alert("Advertencia: " + error.message);
            } else {
                alert("Error del sistema: " + error.message);
            }

        } finally {

            renderMenu();

        }


    });

}