const { Employees } = require("./Employees");
class SalesPerson extends Employees {
  #totalsales;
  constructor(name, position, salary) {
    super(name, position, salary);
    this.clients = [];
    this.#totalsales = 0;
  }

  getSalesNumber() {
    return this.#totalsales;
  }

  makeSale(amount) {
    this.#totalsales += amount;
  }
}

module.exports = {
  SalesPerson,
};
