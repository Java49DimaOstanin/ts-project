"use strict";
// import { Shape } from "./ShapeInterface";
// import { Rectangle } from "./Rectangle";
// import { Square } from "./Square";
Object.defineProperty(exports, "__esModule", { value: true });
const WageEmployee_1 = require("./WageEmployee");
// import { Ciphering } from "./CipheringInterface";
// import { CipherDecipher } from "./CipherDecipher";
// import { ShapesContainer } from "./ShapesContainer";
// const shapes: ShapesContainer = new ShapesContainer ([
//     new Rectangle(3,4),
//     new Square(5),
//     new ShapesContainer([new ShapesContainer([new Square(4), new Square(10)]), new Rectangle(6,4)])
// ]);
// const sumOfShapes: number = shapes.getSquare();
// console.log(sumOfShapes);
// // const crypt :Array<Ciphering> = [
// //     new CipherDecipher(97,122,1),
// //     new CipherDecipher(97,122,1000)
// // ];
// // const incrypted: string = crypt.reduce((res,cur) =>res + cur.getCipher("abc"),"");
// // console.log(incrypted);
// // const crypt:Ciphering = new CipherDecipher(97,122,1);
// // let incrypted:string = crypt.getCipher("abc");
// // console.log(incrypted);
const employee = new WageEmployee_1.WageEmployee(123, "PEtya", 1998, "QA", 1000, 100, 50);
console.log(employee.id);
employee.basicSalary = 6000;
//# sourceMappingURL=app.js.map