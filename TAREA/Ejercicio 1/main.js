function obtenerArrayDelUsuario() {
    let array = prompt("Ingresa los elementos del array separados por comas (ejemplo: 1,2,3,4,5):")
                 .split(',').map(Number);
    return array;
}

function obtenerRotaciones() {
    let rotaciones = parseInt(prompt("¿Cuántas posiciones quieres rotar?"));
    return rotaciones;
}

function rotateArray(arr, n) {
    n = n % arr.length;  // Evita rotar más veces de lo necesario
    return arr.slice(-n).concat(arr.slice(0, -n));
}

function mainRotarArray() {
    let array = obtenerArrayDelUsuario();
    let rotaciones = obtenerRotaciones();

    if (isNaN(rotaciones) || rotaciones < 0) {
        console.log("El número de rotaciones debe ser un número entero positivo.");
        return;
    }
    
    let resultado = rotateArray(array, rotaciones);
    console.log("Array rotado:", resultado);
}

mainRotarArray();