"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    // private width:number;
    // private height: number;
    constructor(width, height) {
        // this.width = width;
        // this.height = height;
        this.width = width;
        this.height = height;
    }
    getSquare() {
        return this.width * this.height;
    }
    getPerimmetr() {
        return this.height * 2 + this.width * 2;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map