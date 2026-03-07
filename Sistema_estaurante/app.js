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
    output.innerHTML = ""; // limpiar

    // crear una lista HTML simple
    let html = "<ul>";
    let total = 0;


    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
        total += plato.stock; // sumar cuantos platos hay en total
    }

    html += "</ul>";
    output.innerHTML = html;
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

function renderLista() {
    const output = document.getElementById("output");
    let html = '<h3>Lista de platos</h3><ul>';
    listadeplatos.forEach(plato => {
        html += `<li>${plato}</li>`;
    });
    html += '</ul>';
    output.innerHTML = html;
}
//buscar plato por su nombre usando find
function buscarplatopornombre(nombre) {
    const plato = menu.find(plato => plato.nombre.toLocaleLowerCase());
    if (!plato) {
        renderLista("resultado de busqueda ", ["no encontrado"]);
        return;
    }
    const texto = '${plato.nombre} - S/ ${plato.precio} - Stock: ${plato.stock}';
    renderLista("resultado de busqueda ", [texto]);

}

//Funcion para filtrar stockbajo
function filtrarStockBajo() {
    let resultado = platos.filter(plato => plato.stock <= 3);
    renderLista("Stock bajo", resultado);
    console.log("Platos con stock bajo:", resultado);
    console.log(filtrarStockBajo());

}
// RESUMEN DEL MENU (MAP)
function obtenerResumenMenu() {

    const resumen = platos.map(plato => {
        return plato.nombre + " - S/ " + plato.precio;

    });

    return resumen;
}
//Mostrar el resumen

console.log("Resumen del menú:");
console.log(obtenerResumenMenu());

// VENDER PLATO 

function venderPlato(nombre, cantidad) {

    const plato = menu.find(p =>
        p.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (!plato) {
        alert("Plato no existe");
        return;
    }

    if (plato.stock < cantidad) {
        alert("Stock insuficiente");
        return;
    }

    plato.stock -= cantidad;

    alert("Venta realizada");

    renderMenu();
}
console.log(venderPlato());

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
    obtenerResumenMenu();
    renderMenu();
});
document.getElementById("btnStockBajo").addEventListener("click", () => {
    filtrarStockBajo();
    renderMenu();
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    buscarplatopornombre();
    renderMenu();
});