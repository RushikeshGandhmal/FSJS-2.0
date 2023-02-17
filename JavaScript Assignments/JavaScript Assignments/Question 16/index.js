/*16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer */

let userInput = prompt("Enter the current month");
userInput = userInput.toLowerCase();

switch (userInput) {
    case "december":
    case "january":
    case "february":
        alert(`Season is Winter🥶🤧. I need a coffee 🍵🍵`);
        break;

    case "september":
    case "october":
    case "november":
        alert(`Season is Autumn 🍂🍂`);
        break;

    case "march":
    case "april":
    case "may":
        alert(`Season is Spring 🌸💐. `);
        break;

    case "june":
    case "july":
    case "august":
        alert(`Season is Summer 🌞☀️. Try some Icecream 🍦🍦 `);
        break;

    default:
        alert("Please check spelling of month you entered!")
        break;
}
