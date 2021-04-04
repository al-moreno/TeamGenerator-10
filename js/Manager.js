
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); 
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    console.log(`${this.name} has ${this.officeNumber} office number.`);
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
