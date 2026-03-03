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