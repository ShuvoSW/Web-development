import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import { RouteHandler, routes } from "./helpers/RouteHandler";
import "./routes";
import { runInContext } from "vm";

function findDynamicRoute(method: string,url: string) {
    const methodMap = routes.get(method);
    if(!methodMap) return null;

    for(const [routePath, handler] of methodMap.entries()){
        const routeParts = routePath.split("/");
        const urlParts = url.split("/")

        if(routeParts.length !== urlParts.length) continue;

        const params: any ={};
        let matched = true

        // "/api/users/:id"
        for(let i = 0; i<routeParts.length; i++) {
            if(routeParts[i]?.startsWith(":")) {
                params[routeParts[i]?.substring(1)!] = urlParts[i];
            } else if(routeParts[i] !== urlParts[i]) {
                matched = false;
                break;
            }
        }

        if(matched){
            return {handler, params};
        }
    }

    return null;
}

const server: Server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        // console.log("server is sunning...");

        const method = req.method?.toUpperCase() || "";

        const path = req.url || "";

        const methodMap = routes.get(method);

        const handler: RouteHandler | undefined = methodMap?.get(path);

        if (handler) {
            handler(req, res);
        } 
        else if(findDynamicRoute(method, path)) {
            const match = findDynamicRoute(method, path);
            (req as any).params = match?.params;
            match?.handler(req, res);
        }
        else {
            res.writeHead(404, { "content-type": "application/json" });
            res.end(
                JSON.stringify({
                    success: false,
                    message: "Route not found!!!",
                    path,
                })
            )
        }
        // root rout
        // if (req.url == "/" && req.method == "GET") {
        //     res.writeHead(200, { "content-type": "application/json" });
        //     res.end(
        //         JSON.stringify({
        //             message: "Hello from node js with typescript...",
        //             path: req.url,
        //         })
        //     )
        // }
        // health rout
        // if (req.url == "/api" && req.method == "GET") {
        // res.writeHead(200, { "content-type": "application/json" });
        // res.end(
        //     JSON.stringify({
        //         message: "Health status ok",
        //         path: req.url,
        //     })
        // )
        // }


        // if (req.url == "/api/user" && req.method == "POST") {
        //     const user = {
        //         id: 1,
        //         name: "alice"
        //     }
        //     res.writeHead(200, { "content-type": "application/json" });
        //     res.end(
        //         JSON.stringify(user)
        //     )
        // if (req.url == "/api/user" && req.method == "POST") {
        // let body = '';

        // //listen for data chunk
        // req.on("data", (chunk) => {
        //     body += chunk.toString();
        // });

        // req.on("end", () => {
        //     try {
        //         const parseBody = JSON.parse(body);
        //         // console.log(body);
        //         console.log(parseBody);
        //         // res.end(body);
        //         console.log("catching current changes");
        //         res.end(JSON.stringify(parseBody));
        //     } catch (err: any) {
        //         console.log(err.message);
        //     }
        // })


        // res.end(JSON.stringify({
        //     message: "processing...",
        // }))
    }
    // }
)


server.listen(config.port, () => {
    console.log(`server is running on port ${config.port}`);
})   