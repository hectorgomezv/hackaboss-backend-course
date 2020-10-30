// Enunciado:
// Usando el módulo fs de NodeJS, escribe una función que acepte como argumento un nombre de directorio (String).
// La función deberá crear ese directorio dentro del directorio actual.
// Si se produce algun error, deberá imprimir el error.

// Puedes usar callbacks o promises, aunque lo recomendable es lo segundo.
const fs = require('fs').promises;
const path = require('path');

async function createDirectory(nombre) {
  try {
    const ruta = path.join(__dirname, nombre);
    await fs.mkdir(ruta);
  } catch (err) {
    // throw err;
    // console.error('Hubo un error');
    console.error(err);
  }
}

createDirectory('myDir');
