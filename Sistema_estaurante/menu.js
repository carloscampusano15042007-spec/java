// 1) VARIABLES + OBJETOS + ARRAYS
export let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 10 },
    { nombre: "Aji de gallina", precio: 11, stock: 6 },
    { nombre: "Causa", precio: 15, stock: 4 }

];

// 3) FUNCIÓN: agregar un plato demo al menú
export function agregarPlatoDemo() {

    const nuevoPlato = { nombre: "Ceviche", precio: 35, stock: 10 };
    menu.push(nuevoPlato);

}