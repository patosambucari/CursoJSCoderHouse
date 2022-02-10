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