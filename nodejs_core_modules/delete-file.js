const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is a temp file");
console.log("tem file created");

// Temp file delete
if(fs.existsSync("./output/temp.txt")) {
    console.log("file exits!!!");

    // file delete function
    fs.unlinkSync("./output/temp.txt");
    console.log("file deleted");
}
