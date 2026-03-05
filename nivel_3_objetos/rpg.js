// creando objeto jugador 

let jugador = {
    nombre: "Eder",
    vida: 100,
    fuerza: 50,
    nivel: 1

}

function atacar(jugador) {
    console.log(jugador.nombre + " esta atacando");
    jugador.vida = jugador.vida - 10;
    console.log("vida del jugador: " + jugador.vida);
}

function vida(jugador) {
    console.log("vida del jugador: " + jugador.vida);
    jugador.vida = jugador.vida + 10;
    console.log("vida del jugador: " + jugador.vida);

}







