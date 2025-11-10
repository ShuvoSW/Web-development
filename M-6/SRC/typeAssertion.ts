// let anythng: any;

// anythng = 434;

// (anythng as number)

const kgToGmConvert = (input: number | string): number | string | undefined => {

    if (typeof input === "number") {
        return (input*1000);
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted output is: ${Number(value) * 1000}`;
    }

}

const result1 = kgToGmConvert(2) as number;

console.log({result1});

const result2 = kgToGmConvert("2 kg") as string;

console.log({result2});


type CustomError = {
    message: string;
}

try {

} catch (error)
 {
   console.log((error as CustomError).message);
}