import { Emploeyee, ROLES } from "./employee";
import { IEmployeeDetails } from "../interfaces/i-emp-detals";
import { IMonthSalary } from "../interfaces/i-salary";

export class LeadEngineer extends Emploeyee {

    constructor(details:IEmployeeDetails, monthSalary:IMonthSalary){
        super(details, monthSalary);
        this.assignDesignation(ROLES.LE);
    }

    hasAddPrivilege():boolean {
        return true;
    }

}