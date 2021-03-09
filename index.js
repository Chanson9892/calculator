const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-del]')
const clearButton = document.querySelector('[data-clear]')
const prevOperandText = document.querySelector('[data-prev]')
const curOperandText = document.querySelector('[data-cur]')


class Calculator {
    constructor(prevOperandText, curOperandText){
        this.prevOperandText = prevOperandText
        this.curOperandText = curOperandText
        this.clear()
    }

    clear() {
        this.prevOperand = ''
        this.curOperand = ''
        this.operation = undefined
    }

    delete() {


    }

    showNumber(number) {
        if (number === '.' && this.curOperand.includes('.')) return
        this.curOperand = this.curOperand.toString() + number.toString()

    }

    chooseOperation(operation) {
        
    }

    compute() {

    }

    updateDisplay() {
        this.curOperandText.innerText = this.curOperand
    }
}

const calculator = new Calculator(prevOperandText, curOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.showNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})