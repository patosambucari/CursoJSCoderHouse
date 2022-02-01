//Creo clases CONTACTO y AGENDA
class Contacto {
    constructor (nombre, mail, telefono){
        this.nombre = nombre;
        this.mail = mail;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor (contacto){
        this.agenda = new Array(contacto);
    }
}

//Capturo datos formulario
let nombre = document.querySelector("#nombre");
let telefono = document.querySelector("#telefono");
let mail = document.querySelector("#mail");
let divIngresoDatos = document.querySelector("#ingresoDatos");
let formIngresoDatos = document.querySelector("#formIngresoDatos");
let botonProcesar = document.querySelector("#botonProcesar");
let ingresoDatos = document.querySelector("#ingresoDatos");
let tablaAgenda = document.querySelector("#tablaAgenda");
let mensaje = document.querySelector("#mensaje");
let habilitoProcesar = false;
let botonBorrar = document.querySelectorAll(".botonBorrar");
let botonAgenda = document.querySelector("#botonAgenda");

//Genero agenda desde el array de contactos
//Encabezados
let headers = ['Nombre', 'Telefono', 'Mail'];
//Muestro contactos ingresados
botonAgenda.addEventListener('click', (evt) => {
    evt.preventDefault();
    //Si la agenda esta vacía, muestro mensaje
    if (nuevaAgenda.agenda[0] === undefined) {
        mensaje.innerHTML="No hay contactos para mostrar";
        mensaje.style.color="black";
    //Si la agenda tiene contactos, creo tabla y la muestro
    } else {
    tablaAgenda.removeChild(tablaAgenda.lastChild);
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    nuevaAgenda.agenda.forEach(contacto => {
        let row = document.createElement('tr');
        Object.values(contacto).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    tablaAgenda.appendChild(table);
    }
});

//Validacion campos vacios
const validoCamposVacios = () => {
    if (nombre.value == "" || telefono.value == "" || mail.value == ""){
        mensaje.innerHTML="&#9888 Todos los campos deben estar completos &#9888";
        mensaje.style.color="red";
        habilitoProcesar = false;
    } else {
        mensaje.innerHTML="Contacto Agregado!";
        mensaje.style.color="green";
        habilitoProcesar = true;
    }
}

//Boton Procesar
botonProcesar.addEventListener("click", (evt)=>{
    evt.preventDefault();
    validoCamposVacios();
    //Si el array esta vacio, ingresa el primer contacto en la posición 0
    if (nuevaAgenda.agenda[0] === undefined && habilitoProcesar==true){
        nuevaAgenda.agenda[0]=(new Contacto((nombre.value).toUpperCase(), telefono.value, (mail.value).toUpperCase()));
        formIngresoDatos.reset();
    } else if (/*nuevaAgenda.agenda[0] !== undefined && */habilitoProcesar==true){
        //Si el array no está vacío, agrega contactos a continuación
        nuevaAgenda.agenda.push(new Contacto((nombre.value).toUpperCase(), mail.value, (telefono.value).toUpperCase()));
        formIngresoDatos.reset();
    }
})

//Creo nueva instancia de Carrito
const nuevaAgenda = new Agenda;