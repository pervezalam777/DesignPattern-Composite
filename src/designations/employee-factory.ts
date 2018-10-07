import { ROLES } from "./employee";
import { IEmployee } from "../interfaces/i-employee";
import { AssistantSoftwareEngineer } from "./ase";
import { IEmployeeDetails } from "../interfaces/i-emp-detals";
import { IMonthSalary } from "../interfaces/i-salary";
import { SoftwareEngineer } from "./se";
import { SeniorSoftwareEngineer } from "./sse";
import { LeadEngineer } from "./le";
import { TeamLead } from "./tl";
import { DevManager } from "./dev-manager";
import { HRManager } from "./hr-manager";
import { SeniorTeamLead } from "./stl";

const EMP_MAP:any = []
EMP_MAP[ROLES.ASE] = AssistantSoftwareEngineer;
EMP_MAP[ROLES.SE] = SoftwareEngineer;
EMP_MAP[ROLES.SSE] = SeniorSoftwareEngineer;
EMP_MAP[ROLES.LE] = LeadEngineer;
EMP_MAP[ROLES.TL] = TeamLead;
EMP_MAP[ROLES.STL] = SeniorTeamLead;
EMP_MAP[ROLES.DEV_MANAGER] = DevManager;
EMP_MAP[ROLES.HR_MANAGER] = HRManager;

export class EmployeeFactory {
    public static create(role:string, details:IEmployeeDetails, 
        monthlySalary:IMonthSalary):IEmployee {
       let Employee = EMP_MAP[role];
        return new Employee(details, monthlySalary);
    }
}