function obtenerArrayParaDividir() {
    let array = prompt("Ingresa los elementos del array separados por comas (ejemplo: 1,2,3,4,5):")
                 .split(',').map(Number);
    return array;
}

function obtenerTamañoSubArray() {
    let chunkSize = parseInt(prompt("¿De qué tamaño quieres las subarrays?"));
    return chunkSize;
}

function chunkArray(array, chunkSize) {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

function mainChunkArray() {
    let array = obtenerArrayParaDividir();
    let chunkSize = obtenerTamañoSubArray();

    if (isNaN(chunkSize) || chunkSize <= 0) {
        console.log("El tamaño de las subarrays debe ser un número entero positivo.");
        return;
    }

    let resultado = chunkArray(array, chunkSize);
    console.log("Array subdividido:", resultado);
}

mainChunkArray();