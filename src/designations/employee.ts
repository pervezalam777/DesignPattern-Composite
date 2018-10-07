import { IEmployee } from "../interfaces/i-employee";
import { IEmployeeDetails } from "../interfaces/i-emp-detals";
import { IMonthSalary } from "../interfaces/i-salary";

export const ROLES = {
    HR_MANAGER:'hr-manager',
    DEV_MANAGER:"development manager",
    ASE:"assistance software engineer",
    SE:"software enginer",
    SSE:"senior software engineer",
    LE:"Lead engineer",
    TL:"Team leader",
    STL:"senior Team lead"
}

export class Emploeyee implements IEmployee {
    protected designation:string = "";
    private details:IEmployeeDetails
    private monthlySalaryDetails:IMonthSalary
    private reporteeList:Array<IEmployee> = new Array();

    constructor(details:IEmployeeDetails, monthSalary:IMonthSalary){
        this.details = details;
        this.monthlySalaryDetails = monthSalary
    }

    getProfessionDetails():IEmployeeDetails {
        return Object.assign({}, this.details);
    }

    getSalaryDetails():IMonthSalary {
        return Object.assign({}, this.monthlySalaryDetails);
    }

    protected assignDesignation(role:string):void{
        this.designation = role;
    }

    protected hasAddPrivilege():boolean {
        return false
    }

    protected hasReporteeDetailPrevilege():boolean {
        return false;
    }

    hasReporteeSalayDetailPrevilage():boolean {
        return false;
    }

    addReportee(emp:IEmployee):boolean{
        if(!this.hasAddPrivilege()){
            return false
        }
        if(this.getIndex(emp) === -1){
            this.reporteeList.push(emp);
            return true;
        }
        return false;
    }

    private getIndex(emp:IEmployee):number{
        let index:number = this.reporteeList
                            .findIndex(value => value === emp)
        return index;
    }

    removeReportee(emp:IEmployee):boolean {
        let index = this.getIndex(emp);
        if(index > -1){
            this.reporteeList.splice(index, 1);
            return true;
        }
        return false;
    }

    printReporteeDetails(emp:IEmployee):void {
        this.reporteeList.forEach((reportee:IEmployee) => {
            console.log("designation ", reportee.getDesignation())
            console.log(JSON.stringify(reportee.getProfessionDetails()))
            if(emp.hasReporteeSalayDetailPrevilage()){
                console.log(JSON.stringify(reportee.getSalaryDetails()))
            }
            reportee.printReporteeDetails(emp);
        })
    }

    getDesignation():string {
        return this.designation;
    }
}