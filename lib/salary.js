var Salary = function(salary) {
  this.salary = salary;
  this.getCalcs();
}

Salary.prototype.innsDefault = 0.0625;

Salary.prototype.format = function(value) {
  return value.toFixed(2);
}

Salary.prototype.getSalary = function() {
  return this.format(this.salary);
}

Salary.prototype.getSalaryFortnightly = function() {
  return this.salary / 2;
}

Salary.prototype.getInss = function() {
  var response = this.getSalary() * this.innsDefault;
  return this.format(response);
}

Salary.prototype.getInssFortnightly = function() {
  var response = this.getInss() / 2;
  return this.format(response);
}

Salary.prototype.getAnnual = function() {
  var response = (this.getSalary() - this.getInss()) * 12;
  return this.format(response);
}

Salary.prototype.setExcess = function(excess) {
  this.excess = excess;
}

Salary.prototype.setBase = function(base) {
  this.base = base;
}

Salary.prototype.setPercentage = function(percentage) {
  this.percentage = percentage;
}

Salary.prototype.getExcess = function() {
  return this.excess;
}

Salary.prototype.getBase = function() {
  return this.base;
}

Salary.prototype.getPercentage = function() {
  return this.percentage;
}

Salary.prototype.getCalcs = function() {
  if (this.getAnnual() > 1 && this.getAnnual() <= 100000.00) {
    this.setExcess(0.00);
    this.setBase(0.00);
    this.setPercentage(0.0);
  }
  else if (this.getAnnual() > 100000.00 && this.getAnnual() <= 200000.00) {
    this.setExcess(100000.00);
    this.setBase(0.00);
    this.setPercentage(0.15); // %15.0
  }
  else if (this.getAnnual() > 200000.00 && this.getAnnual() <= 350000.00) {
    this.setExcess(200000.00);
    this.setBase(15000.00);
    this.setPercentage(0.20); // %20.0
  }
  else if (this.getAnnual() > 350000.00 && this.getAnnual() <= 500000.00) {
    this.setExcess(350000.00);
    this.setBase(45000.00);
    this.setPercentage(0.25); // %25.0
  }
  else if (this.getAnnual() > 500000.00) {
    this.setExcess(500000.00);
    this.setBase(82500.00);
    this.setPercentage(0.30); // %30.0
  }
}

Salary.prototype.getIr = function() {
  var difference = this.getAnnual() - this.getExcess();
  var calculation = (difference * this.getPercentage() + this.getBase()) / 12;
  return this.format(calculation);
}

Salary.prototype.getIrFortnightly = function() {
  return this.format(this.getIr() / 2);
}

Salary.prototype.getRetention = function() {
  return this.format(parseFloat(this.getIr()) + parseFloat(this.getInss()));
}

Salary.prototype.getRetentionFortnightly = function() {
  return this.format(parseFloat(this.getIrFortnightly()) + parseFloat(this.getInssFortnightly()));
}

Salary.prototype.getSalaryFree = function() {
  return this.format(this.getSalary() - this.getRetention());
}

Salary.prototype.getSalaryFreeFortnightly = function() {
  return this.format(this.getSalaryFortnightly() - this.getRetentionFortnightly());
}

module.exports = Salary;
