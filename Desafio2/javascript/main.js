//Bienvenida
alert('Vamos a calcular tu IMC (Indice de Masa Corporal)');

//Se pide ingreso de altura
let altura = Number(prompt('Introduce tu altura (en centimetros)'));

//Valido altura
while (altura < 40 || altura > 240) {
    altura = Number(prompt('Su altura debe ser un valor entre 40 y 240 centimetros'));
}

//Se pide ingreso de peso
let peso = Number(prompt('Introduce tu peso (en kilogramos)'));

//Valido peso
while (peso < 20 || peso > 320) {
    peso = Number(prompt('Su peso debe ser un valor entre 20 y 320 kilogramos'));
}

// Calcula IMC --> peso (kg) / altura (mts) al cuadrado
let imc = peso/(Math.pow((altura/100), 2));

//Redondeo IMC a 2 decimales
imc = Math.round(imc*100)/100;

//Controlo Resultado
console.log(imc);

//Muestro Resultados
if (imc > 0 && imc <= 18.50){
    alert(`Su IMC es ${imc}. Su peso es inferior al normal.`);
} else if (imc > 18.50 && imc <= 24.90) {
    alert(`Su IMC es ${imc}. Su peso es normal.`);
} else if (imc > 24.90 && imc <= 29.90) {
    alert(`Su IMC es ${imc}. Su peso es superior al normal.`);
} else if (imc > 29.90) {
    alert(`Su IMC es ${imc}. Tiene obesidad.`);
} else {
    alert('Alguno de los datos ingresados es incorrecto');
}
