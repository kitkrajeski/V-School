// You are to create a collection of employee's information for your company. Each employee has the following attributes:
// 1. Name
// 1. Salary
// 1. Job title
// 1. Status
// First, you will create an empty array named `employees`
// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.
// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.
// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.

var employees = []
function NewEmployee(name, salary, jobTitle, status) {
    this.name = name;
    this.salary = salary;
    this.jobTitle = jobTitle;
    if (status === undefined) {
        this.status = "Full Time";
    } 
    else {
        this.status = status;
    }
    employees.push(this);
}
NewEmployee.prototype.printEmployeeForm = function() {
    return( "Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: $" + this.salary + ", Status: " + this.status)
}
var employee1 = new NewEmployee("Alice", 50000, "Manager", 'Part Time');
var employee2 = new NewEmployee("Bob", 60000, "Developer");
var employee3 = new NewEmployee("Charlie", 70000, "Designer");

console.log(employee1.printEmployeeForm());
console.log(employees)
