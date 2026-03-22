//grocery bill calculator
function calculateBill() {
    let itemsNumber = prompt("How many items do you have?");
    let total = 0;
    for (let i = 0; i < itemsNumber; i++) {
        let itemPrice = prompt("Enter the price of item " + (i + 1));
        total += parseFloat(itemPrice);
    }
    if(total > 5000){
        let discount = total * 0.1; 
        total -= discount;
        alert("You received a 10% discount of $" + discount.toFixed(2));
    }
    alert("Your total bill is: $" + total.toFixed(2));
}
calculateBill();

//Student grade calculator
function calculateGrade() {
    let name = prompt("Enter the student's name:");
    let total = 0;
    for (let i = 0; i < 5; i++) {
        let grade = prompt("Enter grade " + (i + 1) + " for " + name);
        total += parseFloat(grade);
    }
    let average = total / 5;
    let letterGrade;
    if (average >= 80) {
        letterGrade = 'A';
    } else if (average >= 60) {
        letterGrade = 'B';
    } else if (average >= 40) {
        letterGrade = 'C';
    } 
    else {
        letterGrade = 'F';
    }
    alert(name + "'s total obtained numbers are: " + total.toFixed(2) + ", and their average grade is: " + average.toFixed(2) + " which is a letter grade of: " + letterGrade);
} 
calculateGrade();

//ATM withdrawal simulation
function atmWithdrawal() {
    let balance = 10000; // initial balance
    let withdrawalAmount = prompt("Enter the amount you want to withdraw:");
    if (withdrawalAmount > balance) {
        alert("Insufficient funds. Your current balance is: $" + balance.toFixed(2));
    } else {
        balance -= parseFloat(withdrawalAmount);
        alert("You have withdrawn: $" + withdrawalAmount + ". Your new balance is: $" + balance.toFixed(2));
    }
}
atmWithdrawal();

//Restraunt order system 
function calculateOrder() {
    let menu = {
        "Burger": 500,
        "Pizza": 1200,
        "Soda": 200
    };
    let orderTotal = 0;
    let orderDetails = "Your order:\n";
    for (let item in menu) {
        let quantity = prompt("How many " + item + "s would you like to order? (Price: Rs." + menu[item] + ")");
        orderTotal += parseFloat(quantity) * menu[item];
        orderDetails += quantity + " " + item + "s\n";
    }
    if (orderTotal>2000){
        let discount = orderTotal * 0.15;
        orderTotal -= discount;
        alert("You received a 15% discount of Rs." + discount.toFixed(2));
    }
    alert(orderDetails + "Total: Rs." + orderTotal.toFixed(2));
}
calculateOrder();

// Employee salary calculator
function calculateSalary() {
    let name = prompt("Enter the employee's name:");
    let hoursWorked = prompt("Enter the number of hours worked this week:");
    let hourlyRate = 500; 
    let salary = parseFloat(hoursWorked) * parseFloat(hourlyRate);
    if(hoursWorked > 40){
        let overtimeHours = hoursWorked - 40;
        let overtimePay = overtimeHours * hourlyRate * 1.5;
        salary += overtimePay;
        alert("You have worked " + overtimeHours + " overtime hours and earned an additional Rs." + overtimePay.toFixed(2));
    }
    alert(name + "'s salary is: Rs." + salary.toFixed(2));
}
calculateSalary();