const crypto = require("crypto")
const algorithm = "aes-256-cbc";

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypt = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final("hex");
    
    return {
        iv: iv.toString("hex"),
        encryptedData: encrypted,
    };
}

function decrypt(encryptedData, ivHex) {
    const decipher = crypto.createDecipheriv(algorithm, key, Buffer(ivHex, 'hex'))
    let decrypted = decipher.update(encryptedData, 'hex', 'utf-8')
    decrypted += decipher.final('utf-8');
    return decrypted
}

console.log("Encryption Data : ");