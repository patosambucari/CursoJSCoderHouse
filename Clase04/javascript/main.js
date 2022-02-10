/*function sumar (a, b) {
    return Number(a) + Number (b);
}

function duplicar (a) {
    return (Number(a)*2);
}

let numero1 = prompt("Ingrese un numero");
let numero2 = prompt("Ingrese otro numero");
let resultado1 = sumar(numero1,numero2);
let resultado2 = duplicar(numero1);
let resultado3 = duplicar(numero2);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

alert("El resultado es " + resultado1);
alert ("El doble del primer numero ingresado es " + resultado2);
alert ("El doble del segundo numero ingresado es " + resultado3);


//CALCULAR CUADRADO
let num = prompt("Ingrese numero");

function cuadrado (n){
    return n*n;
}

alert(cuadrado(num)); */

/*
//FUNCION RECURSIVA

//Bienvenida
alert("¡CALCULO DEL FACTORIAL!")

//Pido Ingreso de Numero
numero = prompt ("Ingrese un numero para calcular su factorial");

//Defino función recursiva
const factorial = (n) => {
    if (n == 0){
        return 1;
    }
    return n * factorial(n-1);
}

//Muestro el resultado llamando a la función
alert(`El factorial del numero ${numero} es ${factorial(numero)}`);*/

let palabra = prompt("Ingresar Palabra");

let palabraArray = palabra.split('');

console.log (palabraArray[0]);
//console.log (palabraArray[(palabraArray.length)]);
console.log(palabraArray.length);