// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function calculator(num1, operator, num2) {
    let output;
    switch (operator) {
        case "+":
            output = num1 + num2;
            break;
        case "-":
            output = num1 - num2;
            break;
        case "*":
            output = num1 * num2;
            break;
        case "/":
            output = num1 / num2;
            break;

        default:
            console.log("Please enter a valid operator or given operator is not available");
            output = null;
            break;
    }

    if (output) {
        console.log(`The output of ${num1}${operator}${num2} is : ${output}`)
    }


}

// User Input
let num1 = 15;
let num2 = 20;
let operator = "/";
calculator(num1, operator, num2)