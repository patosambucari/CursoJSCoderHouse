const botonEmpezar = document.getElementById('empezar-btn')
const botonSiguiente = document.getElementById('sig-btn')
const contenedorPregunta = document.getElementById('preg-cont')
const pregunta = document.getElementById('preg')
const botonRespuesta = document.getElementById('respuesta-btn')
let mezclarPreguntas, pregActual;
let puntaje;

botonEmpezar.addEventListener('click', empezarJuego)
botonSiguiente.addEventListener('click', () => {
  pregActual++
  proximaPregunta()
})

function empezarJuego() {
  botonEmpezar.classList.add('hide')
  mezclarPreguntas = pregs.sort(() => Math.random() - .5)
  pregActual = 0
  contenedorPregunta.classList.remove('hide')
  proximaPregunta()
}

function proximaPregunta() {
  resetear();
  mostrarPreg(mezclarPreguntas[pregActual])
}

function mostrarPreg(preg) {
  pregunta.innerText = preg.preg
  preg.respuestas.forEach(respuesta => {
    const button = document.createElement('button')
    button.innerText = respuesta.text
    button.classList.add('btn')
    if (respuesta.correcto) {
      button.dataset.correcto = respuesta.correcto
    }
    button.addEventListener('click', elegirResp)
    botonRespuesta.appendChild(button)
  })
}

function resetear() {
  borrarClases(document.body)
  botonSiguiente.classList.add('hide')
  while (botonRespuesta.firstChild) {
    botonRespuesta.removeChild(botonRespuesta.firstChild)
  }
}

function elegirResp(e) {
  const selectedButton = e.target
  const correcto = selectedButton.dataset.correcto
  clasePorEstado(document.body, correcto)
  Array.from(botonRespuesta.children).forEach(button => {
    clasePorEstado(button, button.dataset.correcto)
  })
  if (mezclarPreguntas.length > pregActual + 1) {
    botonSiguiente.classList.remove('hide')
  } else {
    botonEmpezar.innerText = 'Volver a empezar'
    botonEmpezar.classList.remove('hide')
  }
}

function clasePorEstado(element, correcto) {
  borrarClases(element)
  if (correcto) {
    element.classList.add('correcto')
  } else {
    element.classList.add('error')
  }
}

function borrarClases(element) {
  element.classList.remove('correcto')
  element.classList.remove('error')
}

const pregs = [
  {
    preg: '¿En que año se emitió el primer episodio de Los Simpsons?',
    respuestas: [
      { text: '1988', correcto: false },
      { text: '1989', correcto: true },
      { text: '1990', correcto: false },      
      { text: '1991', correcto: false }
    ]
  },
  {
    preg: '¿Cómo se llama el gato Negro de los Simpsons?',
    respuestas: [
      { text: 'Bola de Nieve II', correcto: true },
      { text: 'Bola de Nieve', correcto: false },
      { text: 'Huesos', correcto: false },
      { text: 'Ayudante de Santa', correcto: false }
    ]
  },
  {
    preg: '¿Quién es el director de la escuela?',
    respuestas: [
      { text: 'Moe Szyslak', correcto: false },
      { text: 'Seymour Skinner', correcto: true },
      { text: 'Edna Krabbapel', correcto: false },
      { text: 'Montgomery Burns', correcto: false }
    ]
  },
  {
    preg: '¿Cuál es el segundo nombre de Homero?',
    respuestas: [
      { text: 'Jaime', correcto: false },
      { text: 'Julio', correcto: false },
      { text: 'John', correcto: false },
      { text: 'Jay', correcto: true }
    ]
  }
]

//Agregar Animaciones JQUERY
//Agregar Suma Puntaje
//Mostrar Puntaje Total