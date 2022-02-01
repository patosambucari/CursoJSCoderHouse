/*const url = "patosambucari.ar";
localStorage.setItem("URL", url);

const nombreGuardado = localStorage.getItem("URL");
console.log(nombreGuardado);

class Producto {
  constructor(id,nombre,precio){
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.precio = precio;
  }
}

const producto1 = new Producto (1,"Tomate",50);

console.log(producto1);

const producto1EnJSON = JSON.stringify(producto1);

console.log(producto1EnJSON);

localStorage.setItem("Producto1", producto1EnJSON);

console.log(localStorage.getItem("Producto1"));

const producto2 = JSON.parse(producto1EnJSON);

console.log(producto2);
*/

var botonRojo = document.getElementById("boton-rojo");
var botonVerde = document.getElementById("boton-verde");
var botonAzul = document.getElementById("boton-azul");
var botonReset = document.getElementById("boton-reset");

botonRojo.addEventListener('click', () => {
  document.body.style.backgroundColor = "red";
  localStorage.setItem("color", "red");
});
botonRojo.addEventListener('mouseover', () =>{
  botonRojo.style.opacity = 0.5;
})
botonRojo.addEventListener('mouseout', () =>{
  botonRojo.style.opacity = 1;
})

botonVerde.addEventListener('click', () => {
  document.body.style.backgroundColor = "green";
  localStorage.setItem("color", "green");
});
botonVerde.addEventListener('mouseover', () =>{
  botonVerde.style.opacity = 0.5;
})
botonVerde.addEventListener('mouseout', () =>{
  botonVerde.style.opacity = 1;
})


botonAzul.addEventListener('click', () => {
  document.body.style.backgroundColor = "blue";
  localStorage.setItem("color", "blue");
});
botonAzul.addEventListener('mouseover', () =>{
  botonAzul.style.opacity = 0.5;
})
botonAzul.addEventListener('mouseout', () =>{
  botonAzul.style.opacity = 1;
})



botonReset.addEventListener('click', () => {
  document.body.style.backgroundColor = "white";
  localStorage.removeItem("color");
});
botonReset.addEventListener('mouseover', () =>{
  botonReset.style.opacity = 0.5;
})
botonReset.addEventListener('mouseout', () =>{
  botonReset.style.opacity = 1;
})

var colorDeFondo = localStorage.getItem("color");

const fondo = () => {
  if (colorDeFondo === null) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = colorDeFondo;
  }
};

fondo();