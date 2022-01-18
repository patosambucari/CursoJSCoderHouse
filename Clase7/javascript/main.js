const url = "patosambucari.ar";
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