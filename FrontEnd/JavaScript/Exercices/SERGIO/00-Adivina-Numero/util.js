// Función para encriptar un número usando Base64
function encryptNumber(num) {
  return btoa(num.toString()); // Convertir el número a string y luego a Base64
}

// Función para desencriptar el número
function decryptNumber(encodedStr) {
  return parseInt(atob(encodedStr), 10); // Decodificar de Base64 y convertir a número
}
