// Array para almacenar los nombres de los amigos.
let amigos = [];

// Función para agregar un nuevo amigo a la lista.
function agregarAmigo() {
    let campoAmigo = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');
    let nombreAmigo = campoAmigo.value.trim();

    // Validar que el campo no esté vacío.
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return; 
    }
    
    // Validar que el nombre no esté ya en la lista.
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido agregado. Por favor, inserte un nombre diferente.");
        campoAmigo.value = '';
        return;
    }

    // Añadir el amigo al array.
    amigos.push(nombreAmigo);

    // Actualizar la lista visible en el HTML.
    listaAmigos.innerHTML = amigos.join(', ');

    // Limpiar el campo de entrada.
    campoAmigo.value = '';
}

// Función para realizar el sorteo del amigo secreto.
function sortearAmigo() {
    // Validar que haya suficientes amigos.
    if (amigos.length < 2) {
        alert("Agrega al menos 2 amigos para poder realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let elementoResultado = document.getElementById('resultado');
    let listaAmigos = document.getElementById('listaAmigos');
    
    // --- LÓGICA AJUSTADA ---
    
    // 1. Mostrar el resultado con el formato exacto de la imagen.
    elementoResultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    
    // 2. Ocultar la lista de participantes.
    listaAmigos.style.display = 'none';
}