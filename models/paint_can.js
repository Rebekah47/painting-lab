const PaintCan = function (volume) {
    this.volume = volume;
    this.paintCan = false;
};

PaintCan.prototype.litresOfPaint = function(){
    return this.volume;
};

PaintCan.prototype.isEmpty = function(){
    return this.paintCan;
}

PaintCan.prototype.empty = function(){
    return this.paintCan = true;
}
module.exports = PaintCan;
