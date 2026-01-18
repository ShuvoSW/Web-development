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

/*
Output
{
    "2025-11-07T08:00:00.000Z": {total:1},
    "2025-11-07T09:00:00.000Z": {total:2},
}
*/