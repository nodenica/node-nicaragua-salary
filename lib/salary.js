var Salary = function(salary) {
  this.salary = salary;
  this.getCalcs();
};

/**
 * INSS Default
 * http://goo.gl/tl0Haa
 */
Salary.prototype.innsDefault = 0.0625;

/**
 * Max cotizacion
 * 2015
 * http://goo.gl/WEmq8r
 * http://goo.gl/FOuoEf
 */
Salary.prototype.maxSalary = 72410;

/**
 * Return data with 2 decimal
 */
Salary.prototype.format = function(value) {
  return value.toFixed(2);
};

/**
 * Return salary with 2 decimal
 */
Salary.prototype.getSalary = function() {
  return this.format(this.salary);
};

/**
 * Return salary / 2
 */
Salary.prototype.getSalaryFortnightly = function() {
  return this.salary / 2;
};

/**
 * Return INSS based salary
 * Use comparation with max salary
 */
Salary.prototype.getInss = function() {
  var salary = (this.getSalary() >= this.maxSalary) ? this.maxSalary : this.getSalary();
  var response = salary * this.innsDefault;
  return this.format(response);
};

/**
 * Return INSS / 2
 */
Salary.prototype.getInssFortnightly = function() {
  var response = this.getInss() / 2;
  return this.format(response);
};

/**
 * Return anual salary
 */
Salary.prototype.getAnnual = function() {
  var response = (this.getSalary() - this.getInss()) * 12;
  return this.format(response);
};

/**
 * Set Excess
 */
Salary.prototype.setExcess = function(excess) {
  this.excess = excess;
};

/**
 * Set Base
 */
Salary.prototype.setBase = function(base) {
  this.base = base;
};

/**
 * Set Percentage
 */
Salary.prototype.setPercentage = function(percentage) {
  this.percentage = percentage;
};

/**
 * Get Excess
 */
Salary.prototype.getExcess = function() {
  return this.excess;
};

/**
 * Get Base
 */
Salary.prototype.getBase = function() {
  return this.base;
};

/**
 * Get Percentage
 */
Salary.prototype.getPercentage = function() {
  return this.percentage;
};

/**
 * Calculate:
 * - percentage
 * - base
 * - excess
 */
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
};

/**
 * Calculate IR
 */
Salary.prototype.getIr = function() {
  var difference = this.getAnnual() - this.getExcess();
  var calculation = (difference * this.getPercentage() + this.getBase()) / 12;
  return this.format(calculation);
};

/**
 * Calculate IR / 2
 */
Salary.prototype.getIrFortnightly = function() {
  return this.format(this.getIr() / 2);
};

/**
 * Return retention
 */
Salary.prototype.getRetention = function() {
  return this.format(parseFloat(this.getIr()) + parseFloat(this.getInss()));
};

/**
 * Return retention / 2
 */
Salary.prototype.getRetentionFortnightly = function() {
  return this.format(parseFloat(this.getIrFortnightly()) + parseFloat(this.getInssFortnightly()));
};

/**
 * Return salary free INSS and IR
 */
Salary.prototype.getSalaryFree = function() {
  return this.format(this.getSalary() - this.getRetention());
};

/**
 * Return salary free INSS and IR / 2
 */
Salary.prototype.getSalaryFreeFortnightly = function() {
  return this.format(this.getSalaryFortnightly() - this.getRetentionFortnightly());
};

(function(exports){

  module.exports = Salary;

})(typeof exports === 'undefined' ? this['salary']={} : exports);
