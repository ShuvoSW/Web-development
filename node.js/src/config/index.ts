// import { configDotenv } from "dotenv"; // shortcut dotenv
import dotenv from "dotenv";
import path from "path";

dotenv.config({path:path.join(process.cwd(), ".env")})

const config = {
    env: process.env.NODE_ENV
}