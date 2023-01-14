"use strict";
// import { Shape } from "./ShapeInterface";
// import { Rectangle } from "./Rectangle";
// import { Square } from "./Square";
Object.defineProperty(exports, "__esModule", { value: true });
const WageEmployee_1 = require("./WageEmployee");
const SalesPerson_1 = require("./SalesPerson");
const Company_1 = require("./Company");
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
const employee1 = new WageEmployee_1.WageEmployee(1, "Pique", 1998, "QA", 10000, 100, 50);
const employee2 = new WageEmployee_1.WageEmployee(2, "Shakira", 1985, "Singer", 5000, 100, 80);
const employee3 = new SalesPerson_1.SalesPerson(3, "Messi", 1986, "Player", 25000, 100, 100, 50, 10);
console.log("get salary 3 ", employee3.computeSalary());
const company = new Company_1.Company([]);
company.addEmployee(employee1);
console.log("get Employee id 1 ", company.getEmployee(1));
company.addEmployee(employee2);
company.addEmployee(employee3);
company.addEmployee(new SalesPerson_1.SalesPerson(4, "Ronaldo", 1984, "Player", 45000, 90, 100, 40, 15));
console.log("get Employee id 4 ", company.getEmployee(4));
console.log("get remove Employee 4 ", company.removeEmployee(4));
// company.removeEmployee(4);
console.log("get remove Employee 4 ", company.removeEmployee(4));
console.log("get Employee id 2 ", company.getEmployee(2));
console.log("get Employee id 3 ", company.getEmployee(3));
const res = company.getEmployeeBySalary(15000, 60000);
res.forEach(element => console.log(element.name, element.computeSalary()));
console.log("get by Salary ", company.getEmployeeBySalary(1000, 30000));
console.log("Computer Budget ", company.computerBudget());
//# sourceMappingURL=app.js.map