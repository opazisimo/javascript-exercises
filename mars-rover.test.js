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

it("moves forward from 0,5 facing north", () => {
  const position = [0,5]
  const orientation = "N"
  const myRover = new Rover(position, orientation)
  myRover.moveForward()
  expect(myRover.orientation).toEqual("N")
  expect(myRover.position).toEqual([0,6])
})

it("moves forward from 6,8 facing south", () => {
  const position = [6,8]
  const orientation = "S"
  const myRover = new Rover(position, orientation)
  myRover.moveForward()
  expect(myRover.orientation).toEqual("S")
  expect(myRover.position).toEqual([6,7])
})

it("moves forward from 78,4 facing west", () => {
  const position = [78,4]
  const orientation = "W"
  const myRover = new Rover(position, orientation)
  myRover.moveForward()
  expect(myRover.orientation).toEqual("W")
  expect(myRover.position).toEqual([77,4])
})

it("moves forward from 34,67 facing east", () => {
  const position = [34,67]
  const orientation = "E"
  const myRover = new Rover(position, orientation)
  myRover.moveForward()
  expect(myRover.orientation).toEqual("E")
  expect(myRover.position).toEqual([35,67])
})

it("turns left facing north", () => {
  const myRover = new Rover()
  myRover.turn("L")
  expect(myRover.orientation).toEqual("W")
  expect(myRover.position).toEqual([0,0])
})

it("turns left facing east", () => {
  const position = [0,0]
  const orientation = "E"
  const myRover = new Rover(position, orientation)
  myRover.turn("L")
  expect(myRover.orientation).toEqual("N")
  expect(myRover.position).toEqual([0,0])
})

it("turns left facing west", () => {
  const position = [0,0]
  const orientation = "W"
  const myRover = new Rover(position, orientation)
  myRover.turn("L")
  expect(myRover.orientation).toEqual("S")
  expect(myRover.position).toEqual([0,0])
})

it("turns left facing south", () => {
  const position = [0,0]
  const orientation = "S"
  const myRover = new Rover(position, orientation)
  myRover.turn("L")
  expect(myRover.orientation).toEqual("E")
  expect(myRover.position).toEqual([0,0])
})

it("turns right facing north", () => {
  const myRover = new Rover()
  myRover.turn("R")
  expect(myRover.orientation).toEqual("E")
  expect(myRover.position).toEqual([0,0])
})

it("turns right facing east", () => {
  const position = [0,0]
  const orientation = "E"
  const myRover = new Rover(position, orientation)
  myRover.turn("R")
  expect(myRover.orientation).toEqual("S")
  expect(myRover.position).toEqual([0,0])
})

it("turns right facing west", () => {
  const position = [0,0]
  const orientation = "W"
  const myRover = new Rover(position, orientation)
  myRover.turn("R")
  expect(myRover.orientation).toEqual("N")
  expect(myRover.position).toEqual([0,0])
})

it("turns right facing south", () => {
  const position = [0,0]
  const orientation = "S"
  const myRover = new Rover(position, orientation)
  myRover.turn("R")
  expect(myRover.orientation).toEqual("W")
  expect(myRover.position).toEqual([0,0])
})

it("flips facing north", () => {
    const orientation = "N"
    const position = [3,4]
    const myRover = new Rover(position, orientation)
    myRover.flip()
    expect(myRover.orientation).toEqual("S")
    expect(myRover.position).toEqual([3,4])
})
