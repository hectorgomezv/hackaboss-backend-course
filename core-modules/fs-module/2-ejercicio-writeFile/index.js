// Enunciado:
// Usando el módulo fs de NodeJS, escribe una función que acepte como argumentos un Path y un string.
// Después llama a esta función para escribir un fichero file.txt en el directorio actual el contenido 'Hola Backend!'

// Puedes usar callbacks o promises, aunque lo recomendable es lo segundo.

const fs = require('fs').promises;
const path = require('path');

async function escribeFichero(ruta, data) {
  try {
    await fs.writeFile(ruta, data);
  } catch (err) {
    console.error('Ha ocurrido un error');
  }
}

const ruta = path.join(__dirname, 'file.txt');
const data = 'Hola Backend!';

escribeFichero(ruta, data);
