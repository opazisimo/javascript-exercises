class Rover {
  constructor(position, orientation) {
    this.position = position === undefined ? [0,0] : position
    this.orientation = orientation === undefined ? "N" : orientation
  }
  moveForward() {
    switch (this.orientation) {
      case "N":
        this.position[1]++
        break;
      case "S":
        this.position[1]--
        break;
      case "W":
        this.position[0]--
        break;
      case "E":
        this.position[0]++
        break;
    }
  }
  turn(direction) {
    if (this.orientation === "N" && direction === "L") {
      this.orientation = "W"
    } else if (this.orientation === "E" && direction === "L") {
      this.orientation = "N"
    } else if (this.orientation === "W" && direction === "L") {
      this.orientation = "S"
    } else if (this.orientation === "S" && direction === "L") {
      this.orientation = "E"
    } else if (this.orientation === "N" && direction === "R") {
      this.orientation = "E"
    } else if (this.orientation === "E" && direction === "R") {
      this.orientation = "S"
    } else if (this.orientation === "W" && direction === "R") {
      this.orientation = "N"
    } else if (this.orientation === "S" && direction === "R") {
      this.orientation = "W"
    }
  }
}

module.exports = Rover
