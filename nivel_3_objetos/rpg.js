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
