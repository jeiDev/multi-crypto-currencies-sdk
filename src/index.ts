import app from "./app";
import http from "http";
import config from "./config";
import core from "./core";

const PORT = config.server.port;

async function root(){
    await core();
    http.createServer(app).listen(PORT, () => {
        console.log(`Server running http://localhost:${PORT}`);
    });
}

root();