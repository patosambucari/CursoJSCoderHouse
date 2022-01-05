alert("Bienvenido a la Clase 3");

let nombre = prompt("Por favor ingresá tu nombre");

alert(`Hola ${nombre}!!`);

console.log("FOR")

let i;

for (i = 0; i <= 10 ; i++){
    console.log(i);
}

console.log("DO WHILE")

let numero = prompt ("Ingresar un numero");

do { 
    numero *= 2;
    console.log(numero);
} while (numero < 100)

console.log("WHILE")

let numero2 = prompt ("Ingresar otro numero")

while (numero2 < 100) {
    numero2 *=2;
    console.log(numero2)
}

let entrada = prompt("Ingresar un dato");

switch (entrada) {
    case "1":
        console.log("Primera Opcion");
        break;
    case "2":
        console.log("Segunda Opcion");
        break;
    default:
        console.log("Otra Opcion");
        break;
}
