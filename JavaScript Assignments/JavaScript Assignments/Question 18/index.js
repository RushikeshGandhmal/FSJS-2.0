//18. Write a program which tells the number of days in a month, now consider leap year.

//Same code we use in previous question will also work here

function getDaysInMonths(year, month) {
    const days = new Date(year, month, 0).getDate();
    //In JavaScript, date object's constructor can take year, month & day as argument and when we use getDate() method, It returns the day of the month for the specified date. But in this case 0  as day is not valid so it will return the last day of previous month.

    return days;
}

//Find number of day in feb month in year 2000
console.log(getDaysInMonths(2000, 2))

//Find number of day in feb month in year 2020
console.log(getDaysInMonths(2020, 2))