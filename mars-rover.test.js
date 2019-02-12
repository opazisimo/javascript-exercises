const Rover = require("./mars-rover")

it("starts in the origin facing north by default", () => {
  const myRover = new Rover()
  expect(myRover).toBeDefined()
  expect(myRover.position).toEqual([0,0])
  expect(myRover.orientation).toEqual("N")
})

it("starts in given position and given orientation", () => {
  const position = [8,6]
  const orientation = "S"
  const myRover = new Rover(position, orientation)
  expect(myRover).toBeDefined()
  expect(myRover.position).toEqual([8,6])
  expect(myRover.orientation).toEqual("S")
})

it("starts in given position without orientation", () => {
  const position = [8,6]
  const myRover = new Rover(position)
  expect(myRover).toBeDefined()
  expect(myRover.position).toEqual([8,6])
  expect(myRover.orientation).toEqual("N")
})

it("starts in given orientation without position", () => {
  const position = undefined
  const orientation = "W"
  const myRover = new Rover(position, orientation)
  expect(myRover).toBeDefined()
  expect(myRover.position).toEqual([0,0])
  expect(myRover.orientation).toEqual("W")
})

it("moves forward", () => {
  const myRover = new Rover()
  myRover.moveForward()
  expect(myRover.orientation).toEqual("N")
  expect(myRover.position).toEqual([0,1])
})
