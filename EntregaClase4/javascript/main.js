//Bienvenida
alert("Calcular número de de CUIL");

//Declaro Variables
let valorSexo;
let valorDni;
let digitosDni = new Array(8);


//Funcion Ingresa y valida sexo
const validaSexo = () => {
    valorSexo = (prompt("Ingrese su sexo (M o F)").toLowerCase());
    while (valorSexo != "m" && valorSexo != "f"){
        valorSexo = (prompt("Debe ingresar M para masculino o F para femenino").toLowerCase());
    }
}

//Funcion Ingresa y valida DNI
const dni = () => {
    valorDni = Number(prompt("Ingrese DNI"));
    while (valorDni < 1000000 || valorDni > 100000000){
        valorDni = (prompt("Ingrese su DNI correctamente"));
    }
}

//Llamo funciones y recibo inputs
validaSexo();
dni();

//Separo el DNI en digitos en un array
const dniEnDigitos = () => {
    arrayDni = valorDni.toString().split('');
    digitosDni = arrayDni.map(Number);
    if (digitosDni.length == 7){
        digitosDni.unshift(0);
    }    
}

//Llamo función para crear array
dniEnDigitos();


console.log(valorDni);
console.log(valorSexo);
console.log(digitosDni);


/*
//Ingresar un numero y decir si es primo
let numero = Number(prompt("Ingrese un numero para ver si es PRIMO o no"));

//Variable booleana para ver si es primo o no
let primo = true;

// Variable para guardar el primer divisor encontrado
let divisor;

//Comparo si es divisible, desde 2 (porque 0 no se puede, y 1 siempre es TRUE) hasta un numero anterior al ingresado
for (i = 2; i < numero; i++){
// Si encuentra un divisor, cambia PRIMO a FALSE y rompe el bucle
    if (numero % i == 0){
        primo = false;
        //Guarda el primer divisor encontrado
        divisor = i;
        break;
    }
}

//variable para mostrar el resultado
let resultado;

if (primo) {
    resultado = "ES PRIMO";
} else {
    resultado = (`NO ES PRIMO. Es divisible, al menos, por ${divisor}`);
}

// Muestra el resultado en pop up
alert(`"El numero ${numero} ${resultado}"`);*/