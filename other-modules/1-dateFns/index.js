// Enunciado:

// Crea una variable llamada fecha que represente el momento actual.
// Imprime por pantalla el valor timestamp (unix time) de la fecha que has creado.
// Después usando el módulo date-fns, añade 2 meses y 4 días a la fecha y muestrala por pantalla.
// Después usando el módulo date-fns, resta 5 años a la fecha anterior y muestrala por pantalla.
// Muestra esta última fecha por pantalla usando el formato "dd/MM/yyyy".

const fecha = new Date();
const dateFns = require('date-fns');
// const { add, sub, format } = require('date-fns');


console.log(fecha.getTime());

const fecha2 = dateFns.add(fecha, { months: 2, days: 4 });
console.log(fecha2);

const fecha3 = dateFns.sub(fecha2, { years: 5 });
console.log(fecha3);

const fecha3Formateada = dateFns.format(fecha3, "dd/MM/yyyy");
console.log(fecha3Formateada);
