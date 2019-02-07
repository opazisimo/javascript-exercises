class Calculator {
  sum(addend1, addend2){
    return addend1 + addend2
  }

  multiply(number1, number2){
    let result = 0

    for (var i = 0; i < Math.abs(number2); i++) {
      result = this.sum(result, number1)
    }

    return result
  }
}

module.exports = Calculator
