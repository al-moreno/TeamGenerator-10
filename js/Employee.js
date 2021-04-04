
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      console.log(`This employee's name is ${this.name}`);
      return this.name;
    }
    getId() {
      console.log(`${this.name} 's id is ${this.id}`);
      return this.id;
    }
    getEmail() {
      console.log(`${this.name} email is ${this.email}`);
      return this.email;
    }
    getRole() {
      return "Employee";
    }
  }
  
  module.exports = Employee;
  