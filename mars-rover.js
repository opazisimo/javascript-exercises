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
    if (direction === "L") {
      if (this.orientation === "N") {
        this.orientation = "W"
      } else if (this.orientation === "E") {
        this.orientation = "N"
      } else if (this.orientation === "W") {
        this.orientation = "S"
      } else if (this.orientation === "S") {
        this.orientation = "E"
      }
    } else if (direction === "R") {
      if (this.orientation === "N") {
        this.orientation = "E"
      } else if (this.orientation === "E") {
        this.orientation = "S"
      } else if (this.orientation === "W") {
        this.orientation = "N"
      } else if (this.orientation === "S") {
        this.orientation = "W"
      }
    }
  }
}

module.exports = Rover
