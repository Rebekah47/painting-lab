const Room = function(area) {
    this.area = area;
    this.roomPainted = false;

};

Room.prototype.areaInSquareMeters = function(){
    return this.area;
}

Room.prototype.isPainted = function(){
    return this.roomPainted;
}

Room.prototype.paint = function(){
    return this.roomPainted = true;
}


module.exports = Room;
