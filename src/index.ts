import { Company } from "./company/company";

class Bootstrap {

    constructor(){  }

    public initialize(){
        let compnay:Company = new Company();
        compnay.initialize();
    }
}   

let boot = new Bootstrap();
boot.initialize();  