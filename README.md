nicaragua-salary
============================

## Features

* IR
* INSS


## Example

    var Salary = require('nicaragua-salary');

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

## Output

    Salario Mensual: 28493.96
    Salario Quincenal: 14246.98
    Salario Libre Mensual: 23453.81
    Salario Libre Quincenal: 11726.91
    INSS Mensual: 1780.87
    INSS Quincenal: 890.43
    IR Mensual: 3259.28
    IR Quincenal: 1629.64
    Retención Mensual (IR + INSS): 5040.15
    Retención Quincenal (IR + INSS): 2520.07
    Anual: 320557.08
    Exceso: 200000
    Base: 15000
    Porcentaje: 0.2
