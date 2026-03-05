// creando objeto jugador 

let jugador = {
    nombre: "Eder",
    vida: 100,
    fuerza: 50,
    nivel: 1

}

function atacar() {
    console.log(jugador.nombre + " esta atacando");
    jugador.vida = jugador.vida - 10;
    console.log("vida del jugador: " + jugador.vida);
}

function curar() {
    console.log("Curando al jugador: " + jugador.vida);
    jugador.vida = jugador.vida + 10;
    console.log("Curando al jugador: " + jugador.vida);

}

function subirNivel() {
    console.log("Subiendo nivel al jugador: " + jugador.nivel);
    jugador.nivel = jugador.nivel + 1;
    console.log("Subiendo nivel al jugador: " + jugador.nivel);
}








