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

function curar(jugador) {
    console.log("Curando al jugador: " + jugador.vida);
    jugador.vida = jugador.vida + 10;
    console.log("Curando al jugador: " + jugador.vida);

}







