class Rover {
  constructor(position, orientation){
    this.position = position === undefined ? [0,0] : position
    this.orientation = orientation === undefined ? "N" : orientation
  }
  moveForward(){
    if(this.orientation === "N"){
      this.position[1]++
    } else if(this.orientation === "S"){
      this.position[1]--
    }
  }
}

module.exports = Rover
