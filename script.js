class Calculator {
  constructor() {
    this.firstNum = null;
    this.secondNum = null;
    this.operation = null;
    this.result = null;
  }

  calculate() {
    switch (this.operation) {
      case '+':
        this.result = parseFloat(this.firstNum) + parseFloat(this.secondNum);
        break;
      case '-':
        this.result = Number(this.firstNum) - Number(this.secondNum);
        break
      case '*':
        this.result = Number(this.firstNum) * Number(this.secondNum);
        break
      case '/':
        if ( Number(this.secondNum) === 0) {
          this.firstNum = null
          this.secondNum = null
          this.result = 'Error'
          break
        } else {
          this.result = Number(this.firstNum) / Number(this.secondNum);
        }
        break
    }
    return this.result
  }

  clear() {
    this.firstNum = null;
    this.secondNum = null;
    this.operation = null;
    this.result = null;
  }
}

class CalculatorUI {
  constructor() {
    this.calculator = new Calculator();
  }

  selectors = {
    root: '[data-js-calc]',
    history: '[data-js-history]',
    answer: '[data-js-answer]',
    division: '[data-js-division]',
    mul: '[data-js-mul]',
    sub: '[data-js-sub]',
    plus: '[data-js-plus]',
    equal: '[data-js-equal]',
    clearAll: '[data-js-clear-all]',
    clear: '[data-js-clear]',
    operation: '[data-js-operation]',
    digit: '[data-js-is-digit]',
  }

  handleDigit(digit) {
    const answerElement = document.querySelector(this.selectors.answer);
    const calc = this.calculator;


    if (calc.operation === null) {
      calc.firstNum = (calc.firstNum ?? '') + digit;
    } else {
      calc.secondNum = (calc.secondNum ?? '') + digit;
    }
  }

  handleOperation(operation) {
    const calc = this.calculator;
    const answerElement = document.querySelector(this.selectors.answer);
    if ( calc.firstNum ?? '') {
      
    }
    answerElement.textContent += operation;
    calc.operation = operation;
  }

  bindEvent() {
    const calcElement = document.querySelector(this.selectors.root);
    const digitButtons = document.querySelectorAll(this.selectors.digit);
    const operationsButtons = document.querySelectorAll(this.selectors.operation);
    const historyElement = document.querySelector(this.selectors.history);
    const answerElement = document.querySelector(this.selectors.answer);
    const equalElement = document.querySelector(this.selectors.equal);
    const clearElement = document.querySelector(this.selectors.clear);
    const clearAllElement = document.querySelector(this.selectors.clearAll);

    digitButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (answerElement.textContent === 'Error') {
          answerElement.textContent = ''
        }

        answerElement.textContent += button.textContent;
        this.handleDigit(button.textContent);
      })
    })

    operationsButtons.forEach((operation) => {
      operation.addEventListener('click', () => {
        this.handleOperation(operation.textContent)
      })
    })

    calcElement.addEventListener('click', (event) => {
      const calc = this.calculator;
      switch (event.target) {

        case clearElement:
          if (calc.result === null && calc.operation === null) {
            let newAnswer = answerElement.textContent.slice(0, -1);
            answerElement.textContent = newAnswer;
            let newNum = calc.firstNum.slice(0, -1);
            calc.firstNum = newNum;
          } else if ( ['+', '-', '*', '/'].includes(answerElement.textContent.slice(-1))) {
            let newAnswer = answerElement.textContent.slice(0, -1);
            answerElement.textContent = newAnswer;
            calc.operation = null;
          } else {
            let newAnswer = answerElement.textContent.slice(0, -1);
            answerElement.textContent = newAnswer;
            let newNum = calc.secondNum.slice(0, -1);
            calc.secondNum = newNum;
          }
          break

        case clearAllElement:
          calc.clear();
          answerElement.textContent = null
          historyElement.textContent = null


        case equalElement:
          const result = calc.calculate();
          const history = answerElement.textContent;
          historyElement.textContent = history + equalElement.textContent;
          answerElement.textContent = result;
          this.calculator.firstNum = result
          this.calculator.secondNum = null
          break
      }

    })
  }
}

const App = new CalculatorUI();
App.bindEvent();