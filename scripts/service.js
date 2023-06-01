 const salaryOperations = {
    basicSalary: 0,
    hra(){
        console.log('Hra is ', this);
        return this.basicSalary * 0.50;
    },
    da(){
        return this.basicSalary * 0.20;
    },
    ta(){
        return this.basicSalary * 0.40;
    },
    ma(){
        return this.basicSalary * 0.30;
    },
    pf(){
        return this.basicSalary * 0.10;
    },
    gs(){
        return this.basicSalary + this.hra() + this.da() + this.ma() + this.ta() ;
    },
    tax(){
        return this.gs() * 0.10;
    },
    ns(){
        return this.gs() - this.pf() - this.tax();
    }
}
export default salaryOperations;