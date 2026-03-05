// creando objeto jugador 

let jugador = {
    nombre: "Eder",
    vida: 100,
    fuerza: 50,
    nivel: 1

}

let enemigo = {
    nombre: "Dani",
    vida: "100",
    fuerza: "50",
    nivel: "1"
}

function atacar() {
    console.log(jugador.nombre + " esta atacando");
    jugador.vida = jugador.vida - 10;
    console.log("vida del jugador: " + jugador.vida);
}

function curar() {

    jugador.vida = jugador.vida + 10;
    console.log("Curando al jugador: " + jugador.vida);

}

function subirNivel() {
    console.log("Subiendo nivel al jugador: " + jugador.nivel);
    jugador.nivel = jugador.nivel + 1;

}

// Mostramos el estado del jugador 

console.log("-----------INICIA LA PARTIDA DEL JUGADOR -----------");
atacar();
curar();
subirNivel();
console.log("-----------FIN DEL JUEGO -----------");






