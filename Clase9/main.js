const botonClick = document.getElementById("boton-click");
const botonDobleClick = document.getElementById("boton-doble-click");
const inputBotones = document.getElementById("input-botones");

botonClick.addEventListener("click", ()=> {
    inputBotones.value="";
})

inputBotones.addEventListener("change", ()=> {
    alert("El campo ha cambiado");
})

botonDobleClick.addEventListener("dblclick", ()=>{
    console.log("Hice doble click");
})