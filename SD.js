const lightblue = document.getElementById('lightblue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnstart = document.getElementById('btnstart')

class game {
    constructor() {
        this.initialize()
        this.generateSequence()
        this.nextLevel()
    }

    initialize() {              
        btnstart.classList.add('hide')
        this.level = 1
        this.colores = {
            lightblue,
            violet,
            orange,
            green
        }
    }
    generateSequence(){     //generate a random color sequence
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
    }

    nextLevel(){
        this.illuminateSequence()
    }
    transformColors(number){        //transform one number on sequence in a color of our board 
        switch(number){
            case 0:
                return "lightblue"
            case 1:
                return "violet"
            case 2:
                return "orange"
            case 3:
                return "green"
        }
    }
    illuminateSequence(){
        for (let i = 0; i < this.level; i++){
            const color = this.transformColors(this.sequence[i])
            setTimeout(() => this.illuminateColor(color), 1500 * i) 
        }
    }
    illuminateColor(color){
        this.colores[color].classList.add("light")
        setTimeout(() => this.turnOff(color), 1500)
    }
    turnOff(off){
        this.colores[off].classList.remove("light")
    }
}

function startGame() {                //start the game    
    window.game = new game()
}