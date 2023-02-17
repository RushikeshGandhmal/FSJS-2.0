//12. Create a human readable time format using the Date time object
//- YYYY-MM-DD HH:mm
//- DD-MM-YYYY HH:mm
//- DD/MM/YYYY HH:mm

function addZeroBeforeSingleDigit(param) {
    if (param < 10) {
        param = "0" + param;
        return param;
    }
    return param;
}

const date = new Date();

const year = date.getFullYear();

let month = date.getMonth() + 1;
month = addZeroBeforeSingleDigit(month);

let dateToday = date.getDate();
dateToday = addZeroBeforeSingleDigit(dateToday);

let hours = date.getHours();
hours = addZeroBeforeSingleDigit(hours);

let mins = date.getMinutes();
mins = addZeroBeforeSingleDigit(mins)



//- YYYY-MM-DD HH:mm
const dateFormat1 = `${year}-${month}-${dateToday} ${hours}:${mins}`;
//- DD-MM-YYYY HH:mm
const dateFormat2 = `${dateToday}-${month}-${year} ${hours}:${mins}`;
//- DD/MM/YYYY HH:mm
const dateFormat3 = `${dateToday}/${month}/${year} ${hours}:${mins}`;

//output
console.log(`Date Format 1 ${dateFormat1}
Date Format 2 ${dateFormat2}
Date Format 3 ${dateFormat3}`)

