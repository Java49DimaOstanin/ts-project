import { Rectangle } from "./Rectangle";
import { Shape } from "./ShapeInterface";
export class Square  extends Rectangle {
   constructor(size: number) {
     super(size,size);
   }
}