import { IMonthSalary } from "./i-salary";
import { IEmployeeDetails } from "./i-emp-detals";

export interface IEmployee {
    getProfessionDetails():IEmployeeDetails
    getSalaryDetails():IMonthSalary
    addReportee(emp:IEmployee):boolean
    removeReportee(emp:IEmployee):boolean
    printReporteeDetails(emp:IEmployee):void
    hasReporteeSalayDetailPrevilage():boolean
    getDesignation():string;
}