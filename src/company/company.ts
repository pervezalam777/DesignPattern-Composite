import { IEmployee } from "../interfaces/i-employee";
import { ROLES } from "../designations/employee";
import { EmployeeFactory } from "../designations/employee-factory";

export class Company {
    private list:Array<IEmployee> 

    constructor(){
        this.list = new Array();
    }

    initialize(){
        let hrManager:IEmployee = EmployeeFactory.create(
            ROLES.HR_MANAGER, {
                name:"hr-Jane",
                address:"NY"
            }, {
                basic:30000,
                hra:30000,
                otherAllowance: 15000,
                tds:5000,
                epf:2000   
            }
        );

        let devManager:IEmployee = EmployeeFactory.create(
            ROLES.DEV_MANAGER, {
                name:"dev-manager-Kurt",
                address:"NY"
            }, {
                basic:100000,
                hra:50000,
                otherAllowance:40000,
                tds:20000,
                epf:30000
            }
        );

        let ase:IEmployee = EmployeeFactory.create(
            ROLES.ASE, {
                name:"ase-peaton",
                address:"NY"
            }, {
                basic:10000,
                hra:5000,
                otherAllowance:3000,
                tds:0,
                epf:2000
            }
        )

        let se:IEmployee = EmployeeFactory.create(
            ROLES.SE, {
                name:"se-paterson",
                address:"NY"
            }, {
                basic:15000,
                hra:7000,
                otherAllowance:5000,
                tds:1000,
                epf:2500
            }
        )

        let sse:IEmployee = EmployeeFactory.create(
            ROLES.SSE, {
                name:"sse-Read",
                address:"NY"
            }, {
                basic:25000,
                hra:11000,
                otherAllowance:8000,
                tds:1500,
                epf:2500
            }
        )

        let le:IEmployee = EmployeeFactory.create(
            ROLES.LE, {
                name:"le-Stuard",
                address:"NY"
            }, {
                basic:45000,
                hra:15000,
                otherAllowance:11000,
                tds:2500,
                epf:3500
            }
        )

        le.addReportee(sse);
        le.addReportee(se);
        le.addReportee(ase);
        
        devManager.addReportee(le);
        hrManager.addReportee(devManager);

        devManager.printReporteeDetails(devManager);
        console.log("---------------------------------------")
        hrManager.printReporteeDetails(hrManager);
        
    }
}