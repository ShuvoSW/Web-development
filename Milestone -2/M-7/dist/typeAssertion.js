"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anythng;
anythng = 434;
// (anythng as number)
const kgToGmConvert = (input) => {
    if (typeof input === "number") {
        return (input * 1000);
    }
    else if (typeof input === "string") {
        return (`Converted output is: ${input}`);
    }
};
const result1 = kgToGmConvert(2);
console.log(result1);
const result2 = kgToGmConvert("2 kg");
console.log(result2);
//# sourceMappingURL=typeAssertion.js.map