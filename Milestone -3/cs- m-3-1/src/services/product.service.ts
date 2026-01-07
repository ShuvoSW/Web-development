import path from "path";
import fs from 'fs';
import { IProduct } from "../types/product.interface";
const filePath = path.join(process.cwd(), './src/database/database.json')

export function readProduct() {
// console.log(process.cwd()); // find directory file
// console.log(filePath);

const data = fs.readFileSync(filePath, 'utf-8')
// console.log(data.toString());
// console.log(data);

return JSON.parse(data)
}

// readProduct()
export function writeProduct(product : any) {
    fs.writeFileSync(filePath, JSON.stringify(product));
}