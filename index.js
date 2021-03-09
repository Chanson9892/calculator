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
        if (number === '.' && this.curOperand.includes('.')) return // if there is decimal already, do nothing
        this.curOperand = this.curOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.curOperand === '') return //if there is no current operand, do nothing
        if (this.prevOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.curOperand
        this.curOperand = ''
    }

    compute() {
        let computation 
        const prev = parseFloat(this.prevOperand)
        const current = parseFloat(this.curOperand)
        if (isNaN(prev) || isNaN(current)) return // if prev or current or not numbers, do nothing
        switch (this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
            break
            case '/':
                computation = prev / current
                break
            case '*':
                computation = prev * current
            break
            default:
                return
        }
        this.curOperand = computation
        this.operation = undefined
        this.prevOperand = ''
    }

    updateDisplay() {
        this.curOperandText.innerText = this.curOperand
        this.prevOperandText.innerText = this.prevOperand
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

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})