export function renderMenu(menu) {
    const output = document.getElementById("output");
    let html = "<h3>Menú</h3><ul>";

    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];

        html += `<li>
        ${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}
        </li>`;
    }

    html += "</ul>";
    output.innerHTML = html;
}

export function renderLista(titulo, listaTextos) {
    const output = document.getElementById("output");

    let html = `<h3>${titulo}</h3><ul>`;

    for (let i = 0; i < listaTextos.length; i++) {
        html += `<li>${listaTextos[i]}</li>`;
    }

    html += "</ul>";
    output.innerHTML = html;
}

export function mostrarMensaje(texto) {
    const output = document.getElementById("output");
    output.innerHTML = `<p>${texto}</p>`;
}
