class Rover {
  constructor(position, orientation){
    this.position = position === undefined ? [0,0] : position
    this.orientation = orientation === undefined ? "N" : orientation
  }
  moveForward(){
    this.position = [0,1]
  }
}

module.exports = Rover
