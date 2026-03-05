// creando objeto jugador 

let jugador = {
    nombre: "Eder",
    vida: 100,
    fuerza: 50,
    nivel: 1

}

let enemigo = {
    nombre: "Dani",
    vida: 100,
    fuerza: 50,
    nivel: 1
}


function atacar() {
    console.log(jugador.nombre + " esta atacando");
    enemigo.vida = enemigo.vida - 60;
    console.log("vida de Dani(Enemigo): " + enemigo.vida);
}

function atacarEnemigo() {
    console.log(enemigo.nombre + " esta atacando");
    jugador.vida = jugador.vida - 40;
    console.log("vida de Eder(Jugador): " + jugador.vida);
}

function curar() {

    jugador.vida = jugador.vida + 100;
    console.log("Curando al jugador: " + jugador.vida);

}

function subirNivel() {

    jugador.nivel = jugador.nivel + 1;

    console.log("Subiendo nivel al jugador: " + jugador.nivel);

}

// Mostramos el estado del jugador 

console.log("-----------INICIA LA PARTIDA DEL JUGADOR -----------");
atacar();
atacarEnemigo();


curar();

subirNivel();
console.log("-----------FIN DEL JUEGO -----------");






