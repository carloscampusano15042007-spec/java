// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 10 },
    { nombre: "Aji de gallina", precio: 11, stock: 6 },
    { nombre: "Causa", precio: 15, stock: 4 }

];

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
// 3) FUNCIÓN: agregar un plato demo al menú
function agregarPlatoDemo() {

    const nuevoPlato = { nombre: "Ceviche", precio: 35, stock: 10 };
    menu.push(nuevoPlato);

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
//buscar plato por su nombre usando find
function buscarplatopornombre(nombre) {

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
function filtrarStockBajo() {

    const resultado = menu.filter(plato => plato.stock <= 3);

    const lista = resultado.map(plato =>
        `${plato.nombre} - Stock: ${plato.stock}`
    );

    renderLista("Platos con stock bajo", lista);
}

// RESUMEN DEL MENU (MAP)
function resumenMenu() {

    const resumen = menu.map(plato =>
        `${plato.nombre} - S/ ${plato.precio}`
    );

    renderLista("Resumen del menú", resumen);
}

//Mostrar el resumen


// VENDER PLATO 

function venderPlato(nombre, cantidad) {

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

function verificarEstadoGeneral() {

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