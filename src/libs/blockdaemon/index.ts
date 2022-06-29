import { Class } from "@swc/core";
import { BlockDaemonI } from "../../interfaces/blockdaemon/blockdaemon.interface";
import BlockDaemonWebsocket from "./websocket";
import RPC from "./RPC";

class BlockDaemon {
    public readonly websocket?: BlockDaemonWebsocket;
    public readonly rpc;

    constructor(config: BlockDaemonI){

        if(config.rpc){
            //@ts-ignore
            let instance = RPC[config.protocol];
    
            if(typeof instance == "function"){
                this.rpc = new instance(config.rpc.api);
            }
        }

        if(config.websocket){
            this.websocket = new BlockDaemonWebsocket(config.websocket, {
                headers:{ 
                    Authorization: `Bearer ${config.token}`
                }
            });
        }
        
    }

    public start(){
        return this.websocket?.start();
    }
}

export default BlockDaemon;