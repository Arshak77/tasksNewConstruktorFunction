function Calculator() {
}

Calculator.prototype.add = function(a, b) { 
   try {
     if(typeof a!== 'number' || typeof b !== 'number') {
        throw TypeError("enter a valid type")
     } else return a + b
    }
    catch (err) {
        return err
    }
}

Calculator.prototype.subtract = function(a, b) {
    try {
        if(typeof a!== 'number' || typeof b !== 'number') {
           throw TypeError("enter a valid type")
        } else return a - b
       }
       catch (err) {
           return err
       }
}

Calculator.prototype.multiply = function(a, b) {
    try {
        if(typeof a!== 'number' || typeof b !== 'number') {
           throw TypeError("enter a valid type")
        } else return a * b
       }
       catch (err) {
           return err
       }
}

Calculator.prototype.divide = function(a, b) {
    try {
        if(typeof a!== 'number' || typeof b !== 'number') {
           throw TypeError("enter a valid type")
        } else return a / b
       }
       catch (err) {
           return err
       }
}

const calculator = new Calculator()

console.log(calculator.add(8,5))
console.log(calculator.subtract(4,5))
console.log(calculator.multiply(11,"11"))
console.log(calculator.divide(11,11))