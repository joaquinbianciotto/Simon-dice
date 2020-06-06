const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
    constructor() {
        this.initialize()
        this.generateSequence()
    }

    initialize() {
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    generateSequence(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*5))
    }
}

function empezarJuego() {                 
    window.juego = new Juego()
}