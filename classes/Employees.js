class Employees {
  static #allEmployees = [];

  #salary;
  #isHired;
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    Employees.#allEmployees.push(this);
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    this.#salary = amount;
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(command) {
    if (command === "hire") {
      this.#isHired = true;
    } else if (command === "fire") {
      this.#isHired = false;
    }
  }

  static getEmployees() {
    return Employees.#allEmployees;
  }

  static getTotalPayroll() {
    let totalPayroll = 0;
    for (const employee of Employees.#allEmployees) {
      totalPayroll += employee.#salary;
    }
    return totalPayroll;
  }
}

module.exports = {
  Employees,
};
