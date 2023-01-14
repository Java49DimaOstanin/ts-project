import { Employee } from "./Employee";
import { WageEmployee } from "./WageEmployee";
export const MIN_PERCENT: number = 1;
export const MAX_PERCENT: number = 99;
export const MIN_SALES: number = 10;
export const MAX_SALES: number = 150;
export class SalesPerson extends WageEmployee {
  constructor(
    id: number,
    name: string,
    birthYear: number,
    department: string,
    basicSalary: number,
    wage: number,
    hours: number,
    private _sales: number,
    private _percent: number
  ) {
    super(id, name, birthYear, department, basicSalary, wage, hours);
  }
  get sales() {
    return this._sales;
  }
  set sales(sales) {
    if (sales < MIN_SALES || sales > MAX_SALES) {
      throw `wrong Sales value must be in range [${MIN_SALES}-${MAX_SALES}]`;
    }
  }
  get percent() {
    return this._percent;
  }
  set percent(percent) {
    if (percent < MIN_PERCENT || percent > MAX_PERCENT) {
      throw `wrong Percent value must be in range [${MIN_PERCENT}-${MAX_PERCENT}]`;
    }
  }
  computeSalary(): number {
    return super.computeSalary() + (this._sales / 100) * this._percent;
  }
}
