import { Emploeyee, ROLES } from "./employee";
import { IEmployeeDetails } from "../interfaces/i-emp-detals";
import { IMonthSalary } from "../interfaces/i-salary";

export class HRManager extends Emploeyee {

    constructor(details:IEmployeeDetails, monthSalary:IMonthSalary){
        super(details, monthSalary);
        this.assignDesignation(ROLES.HR_MANAGER);
    }

    hasReporteeSalayDetailPrevilage():boolean{
        return true
    }

    hasAddPrivilege():boolean {
        return true;
    }
}