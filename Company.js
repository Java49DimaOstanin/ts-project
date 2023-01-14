"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(_employees) {
        this._employees = _employees;
    }
    addEmployee(employee) {
        this._employees.push(employee);
    }
    removeEmployee(id) {
        let flag = false;
        this._employees.forEach((e, i) => {
            if (e.id === id) {
                this._employees.splice(i, 1);
                flag = true;
            }
        });
        return flag;
    }
    getEmployee(id) {
        const emp = this._employees.filter((e) => e.id === id);
        return emp !== null ? emp[0] : null;
    }
    getEmployeeBySalary(from, to) {
        const emps = this._employees.sort((a, b) => a.birthYear - b.birthYear);
        emps.filter((e) => {
            const salary = e.computeSalary();
            return salary >= from && salary <= to;
        });
        return emps;
    }
    computerBudget() {
        return this._employees.reduce((res, e) => res + e.computeSalary(), 0);
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map