class Rover {
  constructor(position, orientation){
    if (position === undefined) {
      this.position = [0,0]
    } else {
      this.position = position
    }
    if (orientation === undefined) {
      this.orientation = "N"
    } else {
      this.orientation = orientation
    }
  }
  moveForward(){
    this.position = [0,1]
  }
}

module.exports = Rover
