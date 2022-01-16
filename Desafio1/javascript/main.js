alert("Hola! Vamos a adaptar tu receta oftalmológica a la graduación que necesitas para lentes de contacto");

//Se pide el ingreso de la graduación Esférica (Miopía o Hipermetropía) de la receta
let recetaAereosEsf = prompt ("Ingresá la graduación Esférica de tu receta (Con 2 decimales)");

//Controlo input
console.log(recetaAereosEsf);

//Se pide el ingreso de la distancia al vértice en milimetros
let distanciaVertice = prompt ("Ingresá la distancia al vértice en milímetros (Entre 13 y 17)");

//Valido que la distancia al vértice esté entre 13 y 17
do {distanciaVertice = prompt ("La distancia al vértice debe ser un valor entre 13 y 17 milímetros")} while (
    Number(distanciaVertice) < 13 || Number(distanciaVertice) > 17  
)

/*Se calcula distometría entera según la formula DC = D / (1-xD)
DC = Receta adaptada a Lentes de Contacto
D = Receta de lentes aereos
x = Distancia al vértice (en metros)
*/
let recetaLC = 
parseFloat(recetaAereosEsf) / 
(1-((parseFloat(distanciaVertice)/1000)*parseFloat(recetaAereosEsf)));

//Confirmo resultado en consola
console.log(recetaLC);

//Redondeo a dos decimales 
resultado = Math.round(recetaLC*100)/100;

//Se muestra el resultado redondeado en pop up
alert(`Tu receta para Lentes de contacto es ${resultado}!`);
