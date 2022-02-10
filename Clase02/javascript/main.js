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
alert(`"El numero ${numero} ${resultado}"`);