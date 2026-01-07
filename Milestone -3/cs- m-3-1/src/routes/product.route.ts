import { IncomingMessage, ServerResponse } from "http";
// import { json } from "stream/consumers";
import { productController } from "../controller/products.controller";

export const productRoute = (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req.url);
    // console.log(req.method);
    
    const url = req.url
    // console.log("Products: ",url);
    const method = req.method

    if(method === "GET" && url === '/') {
        // console.log("Root route");
        // res.writeHead(200, {"content-type": "text-plain"});
        // res.end("Root url")

        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({message: "Hello world"}))
    } else if (url?.startsWith('/products')) {
        // console.log("This product");
        productController(req, res)
    }
    else {
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({message: "Null"}))
    }
}