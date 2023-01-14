"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesPerson = exports.MAX_SALES = exports.MIN_SALES = exports.MAX_PERCENT = exports.MIN_PERCENT = void 0;
const WageEmployee_1 = require("./WageEmployee");
exports.MIN_PERCENT = 1;
exports.MAX_PERCENT = 99;
exports.MIN_SALES = 10;
exports.MAX_SALES = 150;
class SalesPerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _sales, _percent) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._sales = _sales;
        this._percent = _percent;
    }
    get sales() {
        return this._sales;
    }
    set sales(sales) {
        if (sales < exports.MIN_SALES || sales > exports.MAX_SALES) {
            throw `wrong Sales value must be in range [${exports.MIN_SALES}-${exports.MAX_SALES}]`;
        }
    }
    get percent() {
        return this._percent;
    }
    set percent(percent) {
        if (percent < exports.MIN_PERCENT || percent > exports.MAX_PERCENT) {
            throw `wrong Percent value must be in range [${exports.MIN_PERCENT}-${exports.MAX_PERCENT}]`;
        }
    }
    computeSalary() {
        return super.computeSalary() + (this._sales / 100) * this._percent;
    }
}
exports.SalesPerson = SalesPerson;
//# sourceMappingURL=SalesPerson.js.map