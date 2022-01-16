//Calcular Nro de CUIL en base al sexo y DNI
//Formula extraida de https://maurobernal.com.ar/cuil/calcular-el-cuil/

//Bienvenida
alert("Calcular número de de CUIL");

//Declaro Variables
let valorSexo;
let valorDni;
let inicioCuil;
let digitosDni = new Array(8);
let auxDigitoVerificador;
let digitoVerificador;

//Funcion Ingresa y valida sexo, solo permite m o f
const validaSexo = () => {
    valorSexo = (prompt("Ingrese su sexo (M o F)").toLowerCase());
    while (valorSexo != "m" && valorSexo != "f"){
        valorSexo = (prompt("Debe ingresar M para masculino o F para femenino").toLowerCase());
    }
}

//Funcion asignar inicio CUIL: 20 Hombre, 27 Mujer
const asignaInicioCuil = () => {
    if (valorSexo == "m") {
        inicioCuil = 20
    } else if (valorSexo == "f") {
        inicioCuil = 27
    } else {
        alert("Ocurrio un error en el ingreso del sexo");
        validaSexo();
    }   
}

//Funcion Ingresa y valida DNI
const dni = () => {
    valorDni = Number(prompt("Ingrese DNI"));
    //Permite ingresar strings, pero no se como evitar esto
    while (valorDni < 1000000 || valorDni > 100000000){
        valorDni = (prompt("Ingrese su DNI correctamente"));
    }
}

//Separo el DNI en digitos en un array
const dniEnDigitos = () => {
    arrayDni = valorDni.toString().split('');
    digitosDni = arrayDni.map(Number);
    if (digitosDni.length == 7){
        digitosDni.unshift(0);
    }    
}

//Llamo funciones y recibo inputs
validaSexo();
asignaInicioCuil();
dni();

//Llamo función para crear array
dniEnDigitos();

// Función que calcula el auxiliar para obtener el digito verificador
const calculaAuxDigitoVerificador = () => {
    if (inicioCuil == 27) {
        auxDigitoVerificador = 38;    
    } else if (inicioCuil == 20) {
        auxDigitoVerificador = 10;
    } else {
        alert("Ocurrio un error en el ingreso del sexo");
        validaSexo();
    }
    auxDigitoVerificador += (digitosDni[0] * 3);
    auxDigitoVerificador += (digitosDni[1] * 2);
    auxDigitoVerificador += (digitosDni[2] * 7);
    auxDigitoVerificador += (digitosDni[3] * 6);
    auxDigitoVerificador += (digitosDni[4] * 5);
    auxDigitoVerificador += (digitosDni[5] * 4);
    auxDigitoVerificador += (digitosDni[6] * 3);
    auxDigitoVerificador += (digitosDni[7] * 2);    
} 

//Calculo el auxiliar para el digito verificador
calculaAuxDigitoVerificador();

//Funcion para calcular dígito Verificador, de acuerdo a la formula
const calculaDigitoVerificador = () => {
    if (auxDigitoVerificador % 11 == 0){
        digitoVerificador = 0;
    } else if (auxDigitoVerificador % 11 == 1){
        if (valorSexo == "m") {
            inicioCuil = 23;
            digitoVerificador = 9;
        } else if (valorSexo == "f") {
            inicioCuil = 23;
            digitoVerificador = 4;
        } else {
            alert("Ocurrio un error en el ingreso del sexo");
            validaSexo();
        }
    } else {
        digitoVerificador = 11 - (auxDigitoVerificador % 11);    
    }    
}

//Obtengo Digito Verificador
calculaDigitoVerificador();

//Función para mostrar el CUIL por pantalla
const mostrarCUIL = () => {
    alert(`Su CUIL es ${inicioCuil}-${valorDni}-${digitoVerificador}`);
}

//Muestro CUIL llamando a la función
mostrarCUIL();


/* Checkpoints de control
console.log(inicioCuil);
console.log(valorDni);
console.log(valorSexo);
console.log(digitosDni);
console.log(auxDigitoVerificador);
console.log(auxDigitoVerificador/11);
console.log(primerDecimal);
console.log(digitoVerificador);*/
