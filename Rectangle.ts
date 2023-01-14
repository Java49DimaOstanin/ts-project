import { Shape } from "./ShapeInterface";
export class Rectangle implements Shape {
    // private width:number;
    // private height: number;
    constructor(private width: number ,private height: number) {
        // this.width = width;
        // this.height = height;

    }
    getSquare(): number {
        return this.width * this.height;
    }
    getPerimmetr(): number {
        return this.height  * 2 + this.width * 2;
    }


}