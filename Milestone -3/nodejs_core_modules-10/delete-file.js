const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is a temp file");
console.log("tem file created");

// Temp file delete
if (fs.existsSync("./output/temp.txt")) {
    console.log("file exits!!!");

    // file delete function
    fs.unlinkSync("./output/temp.txt");
    console.log("file deleted");
}
try {
    fs.unlinkSync("./output/temp.txt");
} catch (error) {
    console.log("ERROR :", error.message);
}

fs.writeFile("./output/temp2.txt", "Another temp file", (err) => {
    console.log("Another temp file created");

    // asynchronuslly file delete
    fs.unlink("./output/temp2.txt", (err) => {
        if (err) {
            console.error("Error :", err.message);
        } else {
            console.log("Temp2 deleted")
        }
    })
})  