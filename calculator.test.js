const Calculator = require("./calculator")

it("add 8 and 2 numbers", () => {
  const addend1 = 8
  const addend2 = 2
  const myCalculator = new Calculator()

  const result = myCalculator.sum(addend1, addend2)

  expect(result).toEqual(10)

})

it("adds 3 and 28 numbers", () => {
  const addend1 = 3
  const addend2 = 28
  const myCalculator = new Calculator()

  const result = myCalculator.sum(addend1, addend2)

  expect(result).toEqual(31)

})
