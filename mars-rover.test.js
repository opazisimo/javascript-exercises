const Rover = require("./mars-rover")

it("starts in the origin facing north", () => {
  const myRover = new Rover()
  expect(myRover).toBeDefined()
  expect(myRover.position).toEqual([0,0])
  expect(myRover.orientation).toEqual("N")
})

it("moves forward", () => {
  const myRover = new Rover()
  myRover.moveForward()
  expect(myRover.orientation).toEqual("N")
  expect(myRover.position).toEqual([0,1])
})
