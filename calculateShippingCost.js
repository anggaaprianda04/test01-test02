function calculateShippingCost(destination, weight, priority) {
    const validPriority = ["standard", "express", "priority"];

    if (destination !== "domestic" && destination !== "international") {
        return "Invalid destination";
    }

    if (weight <= 0) {
        return "Invalid weight";
    }

    if (!validPriority.includes(priority)) {
        return "Invalid priority";
    }

    let costPerKg = 0;
    let extraCost = 0;

    if (destination === "domestic") {
        if (priority === validPriority[0]) {
            costPerKg = 5;
        } else if (priority === validPriority[1]) {
            costPerKg = 10;
        } else if (priority === validPriority[2]) {
            costPerKg = 20;
        }
        if (weight >= 10) extraCost = 10;
    } else if (destination === "international") {
        if (priority === validPriority[0]) {
            costPerKg = 15;
        } else if (priority === validPriority[1]) {
            costPerKg = 25;
        } else if (priority === validPriority[2]) {
            costPerKg = 50;
        }
        if (weight >= 5) extraCost = 50;
    }
    const totalCost = (costPerKg * weight) + extraCost;
    return totalCost;
}

console.log(calculateShippingCost("domestic", 16, "express"));
console.log(calculateShippingCost("international", 9, "standard")); 