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
      this.orientation = "S"
    }
  }
}

module.exports = Rover
