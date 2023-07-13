import moment from "moment";


function formatAnyInputToStandardDate(input)
{
    const f = ["ddd, DD MMM YYYY","[Q]Q [of] YYYY","MM/DD/YYYY","DD/MM/YYYY"];

    return moment(input,f,true).format("MM/DD/YYYY");
}

//const t = ["13/02/2022","03/04/2022","Q3 of 2021", "Tue, 22 Feb 2022"];

function getFirstMondayOfYear(year)
{
    let time = moment().year(year).startOf('year');
    time = time.add(6,'d').startOf('isoWeek');
    return time.format("MM/DD/YYYY");
}

function getLastMondayOfYear(year)
{
    let time = moment().year(year).endOf('year');
    time = time.startOf('isoWeek');
    return time.format("MM/DD/YYYY");
}

function differencesBetweenTwoDatesAndTime(date1, time1, date2, time2)
{ 
    let m1 = moment(date1+" "+time1,"MM/DD/YYYY HH:mm",true);
    let m2 = moment(date2+" "+time2,"MM/DD/YYYY HH:mm",true);

    let d = moment.duration(Math.abs(m1.diff(m2)));

    return d.years()+" Years, "+d.months()+" Months, "+d.days()+" Days, "+ d.hours()+" Hours, and "+d.minutes()+" Minutes";
}

console.log(differencesBetweenTwoDatesAndTime("03/01/2022","13:03","03/01/2022","15:04"));

