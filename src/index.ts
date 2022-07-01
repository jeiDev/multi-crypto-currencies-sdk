import app from "./app";
import http from "http";
import config from "./config";
import core from "./core";
import blockdaemonMemory from "./memory/blockdaemon.memory";
import Bitcoin from "./libs/core/bitcoin";
import { RCPBlockDaemon } from "./interfaces/blockdaemon/blockdaemon.interface";
import BlockDaemon from "./libs/blockdaemon";

const PORT = config.server.port;

async function root(){
    await core();
    http.createServer(app).listen(PORT, () => {
        console.log(`Server running http://localhost:${PORT}`);

        let instance: BlockDaemon = blockdaemonMemory.get("bitcoin");
        let rpc = instance.rpc;
        // instance.rpc?.wallet
        rpc?.createWallet("test").then(resp => {
            console.log({ resp })
        }).catch(error => {
            console.log({ error })
        })
    });
}

root();