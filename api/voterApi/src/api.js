import express, { json } from "express";
import cors from "cors";
import { createConnection } from "mysql";
import createRouter from "./events.js";
import { getDBCredentials } from "../config/config.js";

const config = getDBCredentials();

const connection = createConnection(config);
connection.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("MySQL Connected");
});

const app = express()
.use(cors())
.use(json())
.use(createRouter(connection));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}.`);
});