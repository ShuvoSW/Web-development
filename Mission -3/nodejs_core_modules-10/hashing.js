const crypto = require("crypto");

console.log("\n MD5 Hash: ");
const md5Hash = crypto.createHash("md5").update("password123").digest("hex");
const md5Hash2 = crypto.createHash("md5").update("password123").digest("hex");
console.log("input password123");
console.log("MD5 HasedPassword: ", md5Hash);
console.log("MD5 Hash2: ", md5Hash2);

const sha256Hash = crypto
.createHash("sha256")
.update("password123")
.digest("hex");
console.log("input: password123");
console.log("SHA256 HasedPassword: ", sha256Hash);

//Password sha512 hash algorithm 
const sha512Hash = crypto
.createHash("sha512")
.update("password123")
.digest("hex");
console.log("input: password123");
console.log("SHA512 HasedPassword: ", sha512Hash);

console.log(2 ** 32 / 10 ** 9);