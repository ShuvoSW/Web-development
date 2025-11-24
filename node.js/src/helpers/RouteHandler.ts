import { IncomingMessage, ServerResponse } from "http";

type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;
const routs: Map<string, Map<string, RouteHandler>> = new Map();