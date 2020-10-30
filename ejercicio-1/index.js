// Enunciado:
// Usando el módulo fs de NodeJS, muestra por pantalla el contenido de file.txt
// Puedes usar callbacks o promises, aunque lo recomendable es lo segundo.

// PISTA: el contenido se lee como un Buffer de datos, usa UTF-8 para leerlo.

const fs = require('fs').promises;

async function leer() {
  try {
    const contenido = await fs.readFile('file.txt', 'utf-8');
    console.log(contenido);
  } catch (err) {
    console.error('Ha ocurrido un error');
  }
}

leer();
