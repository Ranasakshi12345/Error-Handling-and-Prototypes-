class Employee {
    constructor(name,position,salary){
        this.name= name;
        this.position = position;
        this.salary = salary;

    }

    getSalary(){
        return `The salary of ${this.name} is $${this.salary}`;  
    }
}

const employee1= new Employee("Sakshi","Frontend Developer" ,20000);
console.log(employee1.getSalary());