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
        total += plato.precio * plato.stock; // sumar el precio de cada plato por su stock
    }

    html += "</ul>";
    html += `<p><strong>Total: S/ ${total}</strong></p>`;
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

