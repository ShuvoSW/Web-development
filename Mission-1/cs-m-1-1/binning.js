// ========================= Student Login Binning (30-min interval) ===========================

//Login entries 
const logins = [
    {timestamp: "2025-11-07T08:12:00Z", student: "Shuvo"},
    {timestamp: "2025-11-07T08:45:00Z", student: "Ahuvo"},
    {timestamp: "2025-11-07T09:05:00Z", student: "Bhuvo"},
    {timestamp: "2025-11-07T09:20:00Z", student: "Chuvo"},
    {timestamp: "2025-11-07T10:02:00Z", student: "Dhuvo"},
    {timestamp: "2025-11-07T10:50:00Z", student: "Ahuvo"},
]

const interval = 30 * 60 * 1000; 

const binningRange = (timestamp) => {
    const date = new Date(timestamp);
    const floored = Math.floor(date.getTime() / interval) * interval;

    return new Date(floored).toString();
}

// console.log(binningRange("2025-11-07T10:50:00Z"));

const binnedTable = logins.reduce((acc, login) => {
    const bin = binningRange(login.timestamp)
    // console.log(bin);

    if (!acc[bin]) {
        acc[bin] = {total: 0};
    }
    acc[bin].total +=1;
    return acc;
}, {})
console.log(binnedTable);

/*
Output
{
    "2025-11-07T08:00:00.000Z": {total:1},
    "2025-11-07T09:00:00.000Z": {total:2},
}
*/