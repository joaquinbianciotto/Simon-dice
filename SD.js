const lightblue = document.getElementById('lightblue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnstart = document.getElementById('btnstart')
const last_level = 5

class game {
    constructor() {
        this.initialize = this.initialize.bind(this)
        this.initialize()
        this.generateSequence
        setTimeout(this.nextLevel, 500)
    }

    initialize() {
        this.nextLevel = this.nextLevel.bind(this)
        this.chooseColor = this.chooseColor.bind(this)
        this.toggleBtnEmpezar()
        this.level = 1
        this.colors = {
            lightblue,
            violet,
            orange,
            green
        }
    }
    toggleBtnEmpezar() {
        if (btnstart.classList.contains('hide')) {
            btnstart.classList.remove('hide')
        } else {
            btnstart.classList.add('hide')
        }
    }
    generateSequence() {     //generate a random color sequence
        this.sequence = new Array(last_level).fill(0).map(n => Math.floor(Math.random() * 4))
        console.log(this.sequence)
    }

    nextLevel() {
        this.sublevel = 0
        this.generateSequence()
        this.illuminateSequence()
        this.addClicksEvents()

    }

    transformColors(number) {        //transform one number on sequence in a color of our board 
        switch (number) {
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
    transformNumbers(color) {        //transform a color in a number
        switch (color) {
            case "lightblue":
                return 0
            case "violet":
                return 1
            case "orange":
                return 2
            case "green":
                return 3
        }
    }

    illuminateSequence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.transformColors(this.sequence[i])
            setTimeout(() => this.illuminateColor(color), 1500 * i)
        }
    }

    illuminateColor(color) {
        this.colors[color].classList.add("light")
        setTimeout(() => this.turnOff(color), 1500)
    }

    turnOff(off) {
        this.colors[off].classList.remove("light")
    }

    addClicksEvents() {
        this.colors.lightblue.addEventListener("click", this.chooseColor)
        this.colors.violet.addEventListener("click", this.chooseColor)
        this.colors.orange.addEventListener("click", this.chooseColor)
        this.colors.green.addEventListener("click", this.chooseColor)
    }
    removeEvClicks() {
        this.colors.lightblue.removeEventListener("click", this.chooseColor)
        this.colors.violet.removeEventListener("click", this.chooseColor)
        this.colors.orange.removeEventListener("click", this.chooseColor)
        this.colors.green.removeEventListener("click", this.chooseColor)
    }

    win() {
        swal("platzi", "congratulations, yo won the game", "success")
            .then(this.initialize)
    }

    lose() {
        swal("platzi", "you lost the game, very sad, restart to looking for the victory", "error")
            .then(() => {
                this.removeEvClicks()
                this.initialize()
            })
    }

    chooseColor(ev) {
        const nameColor = ev.target.dataset.color
        const numberColor = this.transformNumbers(nameColor)
        
        if (numberColor === this.sequence[this.sublevel]){
            this.sublevel += 1
            if(this.sublevel === this.level){
                this.level++
                this.removeEvClicks()
                if(this.level === (last_level + 1)){
                    this.win()
                }else{
                    this.nextLevel()
                }
            }
        } 
        
        else {
            this.lose()
        }
        
    }
}
function startGame() {                //start the game    
    window.game = new game()
}