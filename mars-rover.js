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
    const CARDINAL_POINTS = ['N','E','S','W']
    let currentOrientationIndex = CARDINAL_POINTS.indexOf(this.orientation)
    let destinationIndex = direction === 'R' ? currentOrientationIndex + 1 : currentOrientationIndex - 1
    const normalizedDestinationIndex = (destinationIndex + CARDINAL_POINTS.length) % CARDINAL_POINTS.length
    this.orientation = CARDINAL_POINTS[normalizedDestinationIndex]
  }
}

module.exports = Rover
