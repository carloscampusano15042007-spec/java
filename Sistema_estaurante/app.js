

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {

    const output = document.getElementById("output");
    output.innerHTML = "";

    let html = "<ul>";
    let total = 0;

    for (let i = 0; i < menu.length; i++) {

        const plato = menu[i];

        let clase = "";

        // lógica de estado
        if (plato.stock == 0) {
            clase = "agotado";
        }
        else if (plato.stock <= 3) {
            clase = "bajo";
        }
        else {
            clase = "normal";
        }

        html += `<li class="${clase}">
            ${plato.nombre} - S/ ${plato.precio} - Stock: ${plato.stock}
        </li>`;

        total += plato.stock;
    }

    html += "</ul>";

    output.innerHTML = html;
    verificarEstadoGeneral();

}



function contarplatos() {
    let totalplatos = menu.reduce((total, plato) => total + plato.stock, 0);
    console.log("Total de platos: " + totalplatos);
    const total = document.getElementById("total");
    total.innerHTML = `Total de platos: ${totalplatos}`;
}

// crear funcion renderLista
function renderLista(titulo, listadeplatos) {
    const output = document.getElementById("output");
    let html = `<h3>${titulo}</h3><ul>`;
    listadeplatos.forEach(plato => {
        html += `<li>${plato}</li>`;
    });
    html += "</ul>";

    output.innerHTML = html;
}


// 4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
    renderMenu();
});

document.getElementById("btnAgregar").addEventListener("click", () => {
    agregarPlatoDemo();
    renderMenu();
});

document.getElementById("btnContar").addEventListener("click", () => {
    contarplatos();
    renderMenu();
});

document.getElementById("btnResumen").addEventListener("click", () => {
    resumenMenu();

});

document.getElementById("btnStockBajo").addEventListener("click", () => {
    filtrarStockBajo();

});

document.getElementById("btnBuscar").addEventListener("click", () => {
    const nombre = document.getElementById("inputBuscar").value;
    buscarplatopornombre(nombre);

});

document.getElementById("btnVender").addEventListener("click", () => {

    const nombre = document.getElementById("nombreVender").value;
    const cantidad = Number(document.getElementById("cantidadVender").value);

    venderPlato(nombre, cantidad);

});