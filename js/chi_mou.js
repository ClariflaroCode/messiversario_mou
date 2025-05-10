document.getElementById("button").addEventListener("click", popUp);

function popUp() {

    const div = document.createElement("div");
    div.classList.add("random-box");
  
    // Obtener dimensiones del viewport
    const maxX = window.innerWidth - 100; // ancho menos el tamaño del div
    const maxY = window.innerHeight - 100; // alto menos el tamaño del div
  
    // Calcular posición aleatoria
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
  
    // Asignar posición
    div.style.left = `${randomX}px`;
    div.style.top = `${randomY}px`;

    div.innerHTML += '<p class="texto">chi mou</p>';
  
    // Agregar al body
    document.body.appendChild(div);
}