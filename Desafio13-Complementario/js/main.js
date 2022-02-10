const botonRespuesta = document.getElementById("respuesta-btn")
let mezclarPreguntas, pregActual;
let puntaje;

$("#empezar-btn").on("click", empezarJuego)
$("#sig-btn").on("click", () => {
  $("#sig-btn").fadeOut(500)
  $("#preg-cont").fadeOut(500, ()=>{
    pregActual++;
    proximaPregunta()
    $("#preg-cont").fadeIn(500); 
  })
})

function empezarJuego() {
  $("#empezar-btn").fadeOut(500, ()=> {
    $("#preg-cont").fadeIn(500);
    mezclarPreguntas = pregs.sort(() => Math.random() - .5)
    pregActual = 0;
    puntaje = 0; 
    proximaPregunta();  
  });
}

function proximaPregunta() {
  resetear();
  mostrarPreg(mezclarPreguntas[pregActual]);
}

function mostrarPreg(preg) {
  $("#preg").text(preg.preg);
  $("#estado").text(`Pregunta Nro: ${pregActual+1} - Puntaje: ${puntaje}`);
  $("#preg").fadeIn(500, ()=> {
    preg.respuestas.forEach(respuesta => {
      const button = document.createElement("button")
      button.innerText = respuesta.text;
      button.classList.add("btn");
      if (respuesta.correcto) {
        button.dataset.correcto = respuesta.correcto;        
      }
      button.addEventListener("click", elegirResp);
      botonRespuesta.appendChild(button);
    })
  })
}

function resetear() {
  borrarClases(document.body);
  while (botonRespuesta.firstChild) {
    botonRespuesta.removeChild(botonRespuesta.firstChild)
  }
}

function elegirResp(e) {
  const selectedButton = e.target;
  const correcto = selectedButton.dataset.correcto;
  clasePorEstado(document.body, correcto);
  Array.from(botonRespuesta.children).forEach(button => {
    clasePorEstado(button, button.dataset.correcto)
  })
  if (correcto){
    puntaje++;
  }
  if (mezclarPreguntas.length > pregActual + 1) {
    $("#sig-btn").fadeIn(500);    
  } else {
    $("#estado").fadeOut(500, ()=>{
      $("#preg-cont").fadeOut(500, ()=> {
        $("#estado").text(`Puntaje Final: ${puntaje}`);
        $("#estado").fadeIn(500, ()=>{
          $("#empezar-btn").text("Volver a empezar");
          $("#empezar-btn").fadeIn(500);
        })    
      })
    })
  }

}

function clasePorEstado(element, correcto) {
  borrarClases(element)
  if (correcto) {
    element.classList.add("correcto");    
  } else {
    element.classList.add("error");
  }
}

function borrarClases(element) {
  element.classList.remove("correcto")
  element.classList.remove("error")
}

const pregs = [
  {
    preg: "¿En que año se emitió el primer episodio de Los Simpsons?",
    respuestas: [
      { text: "1988", correcto: false },
      { text: "1989", correcto: true },
      { text: "1990", correcto: false },      
      { text: "1991", correcto: false }
    ]
  },
  {
    preg: "¿Cómo se llama el gato Negro de los Simpsons?",
    respuestas: [
      { text: "Bola de Nieve II", correcto: true },
      { text: "Bola de Nieve", correcto: false },
      { text: "Huesos", correcto: false },
      { text: "Ayudante de Santa", correcto: false }
    ]
  },
  {
    preg: "¿Quién es el director de la escuela?",
    respuestas: [
      { text: "Moe Szyslak", correcto: false },
      { text: "Seymour Skinner", correcto: true },
      { text: "Edna Krabbapel", correcto: false },
      { text: "Montgomery Burns", correcto: false }
    ]
  },
  {
    preg: "¿En qué sector de la Planta Nuclear trabaja Homero?",
    respuestas: [
      { text: "9-H", correcto: false },
      { text: "7-G", correcto: true },
      { text: "7-H", correcto: false },
      { text: "9-G", correcto: false }
    ]
  },
  {
    preg: "¿Cuál es el segundo nombre de Homero?",
    respuestas: [
      { text: "Jaime", correcto: false },
      { text: "Julio", correcto: false },
      { text: "John", correcto: false },
      { text: "Jay", correcto: true }
    ]
  }
]

//Agregar Animaciones JQUERY
//Agregar Suma Puntaje
//Mostrar Puntaje Total