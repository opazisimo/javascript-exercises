class Rover {
  constructor(position, orientation) {
    this.position = position === undefined ? [0,0] : position
    this.orientation = orientation === undefined ? "N" : orientation
  }
  moveForward() {
    if (this.orientation === "N") {
      this.position[1]++
    } else if (this.orientation === "S") {
      this.position[1]--
    }
  }
  turn(direction) {
    if (this.orientation === "N" && direction === "L") {
      this.orientation = "W"
    } else if (this.orientation === "E" && direction === "L") {
      this.orientation = "S"
    }
  }
}

module.exports = Rover
