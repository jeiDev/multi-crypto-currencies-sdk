import { Class } from "@swc/core";
import { BlockDaemonI, RCPBlockDaemon } from "../../interfaces/blockdaemon/blockdaemon.interface";
import BlockDaemonWebsocket from "./websocket";
import RPC from "./RPC";

class BlockDaemon {
    public readonly websocket?: BlockDaemonWebsocket;
    public readonly rpc?: RCPBlockDaemon;

    constructor(config: BlockDaemonI){

        if(config.rpc){
            //@ts-ignore
            let instance = RPC[config.protocol];
    
            if(typeof instance == "function"){
                this.rpc = new instance(config.rpc);
            }
        }

        if(config.websocket){
            this.websocket = new BlockDaemonWebsocket(config.websocket, {
                headers:{ 
                    Authorization: `Bearer ${config.websocket.token}`
                }
            });
        }
        
    }

    public start(){
        return this.websocket?.start();
    }
}

export default BlockDaemon;