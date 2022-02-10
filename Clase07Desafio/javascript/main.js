/*let nombre = prompt("Ingresar nombre");

localStorage.setItem("nombre", nombre);

let nombreEnStorage = localStorage.getItem("nombre");

alert(nombreEnStorage);*/


//---------------------

//Clase Personas
class Persona {
  constructor(id, nombre, apellido) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
  }
}

//Creo Array de objetos Personas
const sala = [new Persona (1, "patricio", "sambucari"), new Persona (2, "Jorge", "Perez")];

//Pruebo
console.table(sala);

//Convierto el array sala en JSON
const salaEnJSON = JSON.stringify(sala);

//Pruebo
console.log(salaEnJSON);

//Guardo el array en Json en el localStorage
localStorage.setItem("Array Personas", salaEnJSON);

//Recupero el Json del local Storage y asigno a variable
let arrayEnStorage = localStorage.getItem("Array Personas");

//Pruebo
console.log(arrayEnStorage);