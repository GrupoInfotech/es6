'use strict';

var saludar = function saludar(persona) {
  var nombre = persona.nombre;
  var honorifico = persona.honorifico;

  var mensaje = 'Hola ' + honorifico + ' ' + nombre;
  return mensaje;
};
console.log(saludar({ nombre: 'Pepito', honorifico: 'Don' })); // 'Hola Don Pepito'