//17. Write a program which tells the number of days in a month

function getDaysInMonths(year, month) {
    const days = new Date(year, month, 0).getDate();
    //In JavaScript,date object's constructor can take year, month & day as argument and when we use getDate() method, It returns the day of the month for the specified date. But in this case 0 as day is not valid so it will return the last day of previous month.

    return days;
}

//Find total days in March month in a non leap year
console.log(getDaysInMonths(2023, 10))

//Find total days in March month in a non leap year
console.log(getDaysInMonths(2021, 10))

//Find total days in February month in a non leap year
console.log(getDaysInMonths(2022, 2))


