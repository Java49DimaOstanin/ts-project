import { Employee } from "./Employee";
import { WageEmployee } from "./WageEmployee";
import { SalesPerson } from "./SalesPerson";

export class Company {
  constructor(private _employees: Employee[]) {}
  addEmployee(employee: Employee): void {
    this._employees.push(employee);
  }
  removeEmployee(id: number): boolean {
    let flag: boolean = false;
    this._employees.forEach((e, i) => {
      if (e.id === id) {
        this._employees.splice(i, 1);
        flag = true;
      }
    });
    return flag;
  }
  getEmployee(id: number): Employee | null {
    const emp: Employee[] = this._employees.filter(
      (e: Employee) => e.id === id
    );
    return emp !== null ? emp[0] : null;
  }
  getEmployeeBySalary(from: number, to: number): Employee[] {
    const emps: Employee[] = this._employees.sort(
      (a: Employee, b: Employee) => a.birthYear - b.birthYear
    );
    emps.filter((e: Employee) => {
      const salary = e.computeSalary();
      return salary >= from && salary <= to;
    });

    return emps;
  }
  computerBudget(): number {
    return this._employees.reduce((res, e) => res + e.computeSalary(), 0);
  }
}
