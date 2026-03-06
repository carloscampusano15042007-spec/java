let jugador = {
    nombre: "Carlos",
    vida: 100,
    fuerza: 20,
    nivel: 1
};

let enemigo = {
    nombre: "Daniela",
    vida: 80,
    fuerza: 15

};

function atacar(objetivo) {
    console.log(jugador.nombre + " ataca con fuerza de " + jugador.fuerza);
    objetivo.vida = objetivo.vida - jugador.fuerza;
    console.log("Vida del enemigo: " + objetivo.vida);
}

function curar() {
    jugador.vida = jugador.vida + 10;
    console.log(jugador.nombre + " se cura. Vida actual: " + jugador.vida);
}

function subirNivel() {
    jugador.nivel = jugador.nivel + 1;
    jugador.fuerza = jugador.fuerza + 5;
    jugador.vida = jugador.vida + 20;

    console.log(jugador.nombre + " subió a nivel " + jugador.nivel);
}

console.log("=== INICIO DEL RPG ===");

atacar(enemigo);
curar();
subirNivel();

console.log("Estado final del jugador:", jugador);