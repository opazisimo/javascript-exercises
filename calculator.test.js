const Calculator = require("./calculator")

it("add 8 and 2 numbers", () => {
  const myCalculator = new Calculator()
  const result = myCalculator.sum(8, 2)
  expect(result).toEqual(10)
})

it("adds 3 and 28 numbers", () => {
  const myCalculator = new Calculator()
  const result = myCalculator.sum(3, 28)
  expect(result).toEqual(31)
})

it("multiply 2 and 3", () => {
  const myCalculator = new Calculator()
  const result = myCalculator.multiply(2, 3)
  expect(result).toEqual(6)
})

it("multiply 60 and 4", () => {
  const myCalculator = new Calculator()
  const result = myCalculator.multiply(60, 4)
  expect(result).toEqual(240)
})

it("multiply with one negative number", () => {
  const myCalculator = new Calculator()
  const result = myCalculator.multiply(-2, 3)
  expect(result).toEqual(-6)
})
