// Creamos la ballata de superman y goku
// VARIABLES
let vidaHeroe = 100;
let energiaHeroe = 50;

let vidaVillano = 100;
let energiaVillano = 50;


// FUNCIONES

function ataque() {
    if (energiaHeroe >= 10) {
        vidaVillano = vidaVillano - 20;
        energiaHeroe = energiaHeroe - 10;
        console.log("El héroe ataca!");
        console.log("Vida del villano:", vidaVillano);
    } else {
        console.log("El héroe no tiene energía para atacar.");
    }
}

function defender() {
    energiaHeroe = energiaHeroe + 10;
    console.log("El héroe se defiende y recupera energía.");
    console.log("Energía del héroe:", energiaHeroe);
}

function recargarEnergia() {
    energiaHeroe = energiaHeroe + 20;
    console.log("El héroe recarga energía.");
    console.log("Energía del héroe:", energiaHeroe);
}


// SIMULACIÓN DE BATALLA

console.log("¡Comienza la batalla! ");

ataque();
defender();
ataque();
recargarEnergia();
ataque();

console.log("Fin de la batalla");