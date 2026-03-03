
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

//creamos una funcion para que el heroe recupere vida
function escudoMagico() {
    energiaHeroe = energiaHeroe + 20;
    console.log("El heroe gana 20 de su vida con este escudo magico:");
    console.log("Energia del heroe:", energiaHeroe);
}

// SIMULACIÓN DE BATALLA

console.log("¡Comienza la batalla! ");

ataque();
defender();
ataque();
recargarEnergia();
superAtaque();
escudoMagico();
ataque();

console.log("Fin de la batalla");

// 🔹 VARIABLES
let heroe = "Superman";
let villano = "Batman";

let energiaHeroe = 100;
let energiaVillano = 100;

// 🔹 FUNCIONES

function ataque() {
    console.log("⚔️ " + heroe + " ataca a " + villano);
    energiaVillano = energiaVillano - 20;
    console.log("Energía de " + villano + ": " + energiaVillano);
}

function defender() {
    console.log("🛡️ " + villano + " se defiende");
    energiaVillano = energiaVillano + 10;
    console.log("Energía de " + villano + ": " + energiaVillano);
}

function recargarEnergia() {
    console.log("🔋 " + heroe + " recarga energía");
    energiaHeroe = energiaHeroe + 15;
    console.log("Energía de " + heroe + ": " + energiaHeroe);
}

// ⭐ FUNCIÓN ESPECIAL — Estudiante A
function superAtaque() {
    energiaVillano -= 40;
    console.log("💥 SUPER ATAQUE activado. Energía villano:", energiaVillano);
}

// 🔹 SIMULACIÓN DE BATALLA

console.log("🔥 INICIA LA BATALLA 🔥");

ataque();
defender();
recargarEnergia();
ataque();
superAtaque();

console.log("🏁 FIN DE LA BATALLA");
