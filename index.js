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
    return time.format("MM/DD/YYYY")
}

