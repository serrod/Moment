import moment from "moment-timezone";

function formatAnyInputToStandardDate(input)
{
    const f = ["ddd, DD MMM YYYY","[Q]Q [of] YYYY","MM/DD/YYYY","DD/MM/YYYY"];

    return moment(input,f,true).format("MM/DD/YYYY");
}

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
    let now = moment();

    m1 = m1.add(num,'d');
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    m2 = m2.add(num,'d');

    let d1 = moment.duration(Math.abs(m1.diff(now)));
    let d2 = moment.duration(Math.abs(m2.diff(now)));
    
    if (d1.asSeconds() < d2.asSeconds())
        return m1.format("MM/DD/YYYY");
    else
        return m2.format("MM/DD/YYYY");
}

function countDownMiami()
{
    let time = moment().tz("America/New_York").year(2026).startOf('year');
    let now = moment()
    let d = moment.duration(time.diff(now));

    return (d.months()+(d.years()*12))+" Months, "+d.days()+" Days, "+d.hours()+
           " Hours, "+d.minutes()+" Minutes, "+ d.seconds()+ " and Seconds";
}

function countDownQatar()
{
    let time = moment().tz("Asia/Qatar").year(2026).startOf('year');
    let now = moment()
    let d = moment.duration(time.diff(now));

    return (d.months()+(d.years()*12))+" Months, "+d.days()+" Days, "+d.hours()+
           " Hours, "+d.minutes()+" Minutes, "+ d.seconds()+ " and Seconds";
}

function timezoneHourDifference(date, tz1, tz2)
{
    let m1 = moment.tz(date,"MM/DD/YYYY hh:mma", tz1).utcOffset();
    let m2 = moment.tz(date, "MM/DD/YYYY hh:mma", tz2).utcOffset();

    return Math.abs((m1 - m2) / 60)
}

function getAllSpecificDays(year, month, dayOfWeek)
{
    let m = moment().year(year).month(month-1).startOf('month').day(dayOfWeek);
    let l = [];

    if (m.date() > 7)
        m.add(7, 'd');

    while(m.month() === month - 1)
    {
        l.push(m.format("MM/DD/YYYY"));
        m.add(7, 'd');
    }

    return l;
}

function getWeekOfYear(date)
{
    let day = date.slice(0,2);
    let day2 = parseInt(day);

    day2 = ((day2+9)%12)+1;
    date = date.replace(day,day2.toString());
    
    let m  = moment(date,"MM/DD/YYYY");
    return(m.week());
}
