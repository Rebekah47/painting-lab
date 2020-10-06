const PaintCan = require("./paint_can");

const Decorator = function () {
    this.stock = [];
};
Decorator.prototype.paintStock = function(){
    return this.stock
};

Decorator.prototype.addCanOfPaint = function(paintCan){
    this.stock.push(paintCan);
};

Decorator.prototype.calculateAmountOfPaint = function(){
    let amount = 0;
    for (let can of this.stock){
    amount += can.volume;
    };
    return amount;

};

Decorator.prototype.hasEnoughPaint = function(room){
    if (this.calculateAmountOfPaint() === room.areaInSquareMeters()){
        return true
    } else {
        return false
    };

}

Decorator.prototype.paintRoom = function(room){
    if (this.hasEnoughPaint(room) === true){
    room.paint()}

}
    





module.exports = Decorator;
