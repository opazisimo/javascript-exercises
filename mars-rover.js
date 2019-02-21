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
    let destinationIndex = 0
    let currentOrientationIndex = CARDINAL_POINTS.indexOf(this.orientation)
    if ( direction === 'R' ) {
      destinationIndex = currentOrientationIndex + 1
    } else if ( direction === 'L') {
      destinationIndex = currentOrientationIndex - 1
    }
    const finalDestination = (destinationIndex + CARDINAL_POINTS.length) % CARDINAL_POINTS.length
    this.orientation = CARDINAL_POINTS[finalDestination]

  }
}

module.exports = Rover
