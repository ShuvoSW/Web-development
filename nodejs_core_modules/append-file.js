const fs = require("fs");

fs.writeFileSync("./output/app.log", "Application Started\n");
console.log("file created");