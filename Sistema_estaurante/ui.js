import { menu, agregarPlatoDemo } from "./menu.js";

import {
    contarPlatos,
    buscarPlatoPorNombre,
    filtrarStockBajo,
    resumenMenu,
    venderPlato,
    calcularEstadoPlato,
    verificarEstadoGeneral
}
    from "./operaciones.js";


export function renderMenu() {

    const output = document.getElementById("output");

    let html = "<ul>";

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

    lista.forEach(item => {
        html += `<li>${item}</li>`;
    });

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

        const nombre = document.getElementById("inputBuscar").value;

        const plato = buscarPlatoPorNombre(nombre);

        if (!plato) {

            renderLista("Resultado", ["No encontrado"]);

            return;
        }

        renderLista("Resultado", [
            `${plato.nombre} - S/ ${plato.precio} - Stock: ${plato.stock}`
        ]);

    });


    document.getElementById("btnVender").addEventListener("click", () => {

        const nombre =
            document.getElementById("nombreVender").value;

        const cantidad =
            Number(document.getElementById("cantidadVender").value);

        const mensaje = venderPlato(nombre, cantidad);

        alert(mensaje);

        renderMenu();

    });
}