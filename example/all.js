var Salary = require('../lib/salary');

var monthSalary = 28493.96;

var salary = new Salary(monthSalary);

console.log('Salario Mensual: %d', salary.getSalary());

console.log('Salario Quincenal: %d', salary.getSalaryFortnightly());

console.log('Salario Libre Mensual: %d', salary.getSalaryFree());

console.log('Salario Libre Quincenal: %d', salary.getSalaryFreeFortnightly());

console.log('INSS Mensual: %d', salary.getInss());

console.log('INSS Quincenal: %d', salary.getInssFortnightly());

console.log('IR Mensual: %d', salary.getIr());

console.log('IR Quincenal: %d', salary.getIrFortnightly());

console.log('Retención Mensual (IR + INSS): %d', salary.getRetention());

console.log('Retención Quincenal (IR + INSS): %d', salary.getRetentionFortnightly());

console.log('Anual: %d', salary.getAnnual());

console.log('Exceso: %d', salary.getExcess());

console.log('Base: %d', salary.getBase());

console.log('Porcentaje: %d', salary.getPercentage());
