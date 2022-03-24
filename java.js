class Calculator {
    constructor(previousOperandTextElement. currentOperandTextElement) {
        this.previousOperandTextElement(parameter) currentOperandTextElement: any
        this.previousOperandTextElement = currentOperandTextElement
        this.clear()
    }

clear() {
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
}

delete() {
}

appendNumber (number) {
    this.currentOperand = number
}

chooseOperation(operation) {

}

compute() {

}

updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('
[data-previous-operand]')
const equalsButton = document.querySelector('
[data-current-operand]')


const Calculator = new Calculator(previousOperandTextElement, 
currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('Click,'() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})