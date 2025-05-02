function calculateTax(income, age, dependents) {
    if (typeof income !== 'number' || isNaN(income) || income < 0) {
        return "Invalid income";
    }
    if (typeof age !== "number" || isNaN(age) || age < 0) {
        return "Invalid age";
    }
    if (typeof dependents !== "number" || isNaN(dependents) || dependents < 0) {
        return "Invalid dependents";
    }

    if (age < 18) {
        return "Not eligible for tax"
    }

    let tax = 0;

    if (income <= 10000) {
        tax = income * 0.10;
    } else if (income <= 50000) {
        tax = income * 0.20;
    } else {
        tax = income * 0.30;
    }

    if (age >= 65) {
        tax *= 0.8;
    }

    tax -= dependents * 500;

    if (tax < 0) {
        tax = 0;
    }

    return tax;
}

console.log(calculateTax(30000, 30, 2));
console.log(calculateTax(60000, 70, 1));
console.log(calculateTax(9000, 17, 0));
console.log(calculateTax("9000", 30, 1)); 