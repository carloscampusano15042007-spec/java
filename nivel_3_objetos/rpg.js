let jugador = {
    nombre: "Carlos",
    vida: 100,
    fuerza: 20,
    nivel: 1
};

function atacar(objetivo) {
    console.log(jugador.nombre + " ataca con fuerza de " + jugador.fuerza);
    objetivo.vida = objetivo.vida - jugador.fuerza;
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