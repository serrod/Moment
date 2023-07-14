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

    return d.years()+" Years, "+d.months()+" Months, "+d.days()+" Days, "+d.hours()+" Hours, and "+d.minutes()+" Minutes";
}


function closestToNow()
{
    //random date range from 01/01/0001 to 01/01/3000 
    let max = 1095364;
    let min = 0;

    let num = Math.floor(Math.random() * (max - min + 1)) + min; 
    
    let m1 = moment().year(1).startOf('year');
    let m2 = moment().year(1).startOf('year');

    m1 = m1.add(num,'d');
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    m2 = m2.add(num,'d');
    console.log(m1.format("MM/DD/YYYY"));
    console.log(m2.format("MM/DD/YYYY"))


    return "test";
}

function countDownMiami()
{
    let time = moment().utc().year(2026).startOf('year').add(5,'h');
    let now = moment()
    let d = moment.duration(time.diff(now));
    return (d.months()+(d.years()*12))+" Months, "+d.days()+" Days, "+d.hours()+
           " Hours, "+d.minutes()+" Minutes, "+ d.seconds()+ " and Seconds";
}

function countDownQatar()
{
    let time = moment().utc().year(2026).startOf('year').subtract(3,'h');
    let now = moment()
    let d = moment.duration(time.diff(now));
    return (d.months()+(d.years()*12))+" Months, "+d.days()+" Days, "+d.hours()+
           " Hours, "+d.minutes()+" Minutes, "+ d.seconds()+ " and Seconds";
}

function timezoneHourDifference(date, tz1, tz2)
{
    return "test";
}

//console.log(differencesBetweenTwoDatesAndTime("03/01/2022","13:03","03/01/2022","15:04"));
//console.log(countDownMiami());
//console.log(countDownQatar());
closestToNow();
