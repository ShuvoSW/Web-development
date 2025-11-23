import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";

const server: Server = http.createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        console.log("server is sunning...");

        // root rout
        if (req.url == "/" && req.method == "GET") {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(
                JSON.stringify({
                    message: "Hello from node js with typescript...",
                    path: req.url,
                })
            )
        }
        // health rout
        if (req.url == "/api" && req.method == "GET") {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(
                JSON.stringify({
                    message: "Health status ok",
                    path: req.url,
                })
            )
        }


        if (req.url == "/api/user" && req.method == "POST") {
            const user = {
                id: 1,
                name: "alice"
            }
            res.writeHead(200, { "content-type": "application/json" });
            res.end(
                JSON.stringify(user)
            )
        }
    })


server.listen(config.port, () => {
    console.log(`server is running on port ${config.port}`);
})