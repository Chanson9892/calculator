const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-del]')
const clearButton = document.querySelector('[data-clear]')
const prevOperand = document.querySelector('[data-prev]')
const curOperand = document.querySelector('[data-cur]')


class Calculator {
    constructor(prevOperand, curOperand){
        this.prevOperand = prevOperand
        this.curOperand = curOperand
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
        if (number === '.' && this.curOperand.includes('.')) return;
        this.curOperand = this.curOperand.toString() + number.toString()

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.curOperand.innerText = this.curOperand
    }
}

const calculator = new Calculator(prevOperand, curOperand)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})