// Creamos la batalla de superman y goku

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

// ⭐ FUNCIÓN 1
function escudoMagico() {
    vidaHeroe = vidaHeroe + 20;
    console.log("✨ Escudo mágico activado.");
    console.log("Vida del héroe:", vidaHeroe);
}

// ⭐ FUNCIÓN 2
function superAtaque() {
    if (energiaHeroe >= 20) {
        vidaVillano = vidaVillano - 40;
        energiaHeroe = energiaHeroe - 20;
        console.log("💥 SUPER ATAQUE activado!");
        console.log("Vida del villano:", vidaVillano);
    } else {
        console.log("No hay energía suficiente para el super ataque.");
    }
}


// SIMULACIÓN DE BATALLA

console.log("🔥 INICIA LA BATALLA 🔥");

ataque();
defender();
recargarEnergia();
superAtaque();   // ✅ ahora sí funciona
escudoMagico();  // ✅ ahora sí funciona
ataque();

console.log("🏁 FIN DE LA BATALLA");
