class Calculator {
  constructor(previousOperands, currentOpreands) {
    this.previousOperands = previousOperands;
    this.currentOpreands = currentOpreands;
    this.allClear();
  }
  allClear() {
    this.currentOpreand = '';
    this.previousOperand = '';
    this.operations = undefined;
  }
  appendNumber(number) {
    number === "." && this.currentOpreand.includes(".")
      ? null
      : this.currentOpreand == undefined
        ? (this.currentOpreand = "")
        : (this.currentOpreand += number);
  }
  chooseOperations(operation) {
    if (this.currentOpreand === "") {
      console.log("null");
      return
    }
    if (this.previousOperand !== "") {
      this.finalResults()
    }
    this.operations = operation;
    this.previousOperand = this.currentOpreand;
    this.currentOpreand = "";

    // idk bro why this code is not working when am trying 2nd operation it is giving me undefinrd error :)))

    // this.currentOpreand === ""
    //   ? null
    //   : this.previousOperand !== ""
    //   ? this.finalResults()
    //   : (this.operations = operation);
  }
  finalResults() {
    let compute;
    const current = parseFloat(this.currentOpreand);
    const previous = parseFloat(this.previousOperand);

    if (isNaN(previous) || isNaN(current)) return;
    switch (this.operations) {
      case "+":
        compute = previous + current;
        break;
      case "-":
        compute = previous - current;
        break;
      case "*":
        compute = previous * current;
        break;
      case "/":
        compute = previous / current;
        break;
      default:
        break;
    }
    this.currentOpreand = compute;
    this.previousOperand = '';
    this.operations = undefined;
  }
  delete() {
    this.currentOpreand = this.currentOpreand.toString().slice(0, -1);
  }
  getDisplayNumber(number) {
    return number 
  }
  updateDisplay() {
    this.currentOpreands.innerText = this.getDisplayNumber(this.currentOpreand);
    this.operations != null ? this.previousOperands.innerText = `${this.previousOperand} ${this.operations}` : this.previousOperands.innerText = '';
  }
}

const previousOperands = document.querySelector(".previousOperands");
const currentOpreands = document.querySelector(".currentOperands");

const number = document.querySelectorAll("[data-number]");
const operation = document.querySelectorAll("[data-operation]");
const allClear = document.querySelector("[data-clear]");
const deleteLastOne = document.querySelector("[data-delete]");
const result = document.querySelector("[data-result]");

let calculation = new Calculator(previousOperands, currentOpreands);

number.forEach((element) => {
  element.addEventListener("click", () => {
    calculation.appendNumber(element.innerText);
    calculation.updateDisplay();
  });
});

operation.forEach((element) => {
  element.addEventListener("click", () => {
    calculation.chooseOperations(element.innerText);
    calculation.updateDisplay();
  });
});

result.addEventListener("click", () => {
  calculation.finalResults();
  calculation.updateDisplay();
});

allClear.addEventListener("click", () => {
  calculation.allClear();
  calculation.updateDisplay();

})

deleteLastOne.addEventListener("click", () => {
  calculation.delete();
  calculation.updateDisplay();
})