const { Employees } = require("./Employees");
class Manager extends Employees {
  #employeesManaged;
  constructor(name, position, salary, department) {
    super(name, position, salary);
    this.department = department;
    this.#employeesManaged = [];
  }

  getEmployeesManaged() {
    return this.#employeesManaged;
  }

  setEmployeesManaged(employee) {
    if (employee instanceof Employees) {
      this.#employeesManaged.push(employee);
    }
  }
}

module.exports = {
  Manager,
};
