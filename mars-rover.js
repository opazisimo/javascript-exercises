const CARDINAL_POINTS = ['N','E','S','W']
const STEPS = [ [0,1], [1,0], [0,-1], [-1,0] ]

class Rover {

  constructor(position, orientation) {
    this.position = position === undefined ? [0,0] : position
    this.orientation = orientation === undefined ? 'N' : orientation
  }
  moveForward() {
    const stepVector = STEPS[this.getCurrentOrientationIndex()]
    this.position = [this.position[0]+ stepVector[0], this.position[1]+ stepVector[1]]
  }
  turn(direction) {
    let currentOrientationIndex = this.getCurrentOrientationIndex()
    let destinationIndex = direction === 'R' ? currentOrientationIndex + 1 : currentOrientationIndex - 1
    const normalizedDestinationIndex = (destinationIndex + CARDINAL_POINTS.length) % CARDINAL_POINTS.length
    this.orientation = CARDINAL_POINTS[normalizedDestinationIndex]
  }
  getCurrentOrientationIndex(){
    return CARDINAL_POINTS.indexOf(this.orientation)
  }
  flip(){
    switch (this.orientation) {
      case 'N':
        this.orientation = 'S'
        break
      case 'E':
        this.orientation = 'W'
        break;
      case 'S':
        this.orientation = 'N'
        break;
      case 'W':
        this.orientation = 'E'
        break;
    }
  }
}

module.exports = Rover
