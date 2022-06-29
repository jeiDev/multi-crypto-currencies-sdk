import { ClientOptions, ServerOptions } from "ws";
import { ConfigWebsocketI } from "../../interfaces/websocket/websocket.interface";
import WebsocketClient from "./client";
import WebsocketServer from "./server";

class Websocket{
    protected readonly client?: WebsocketClient;
    protected readonly server?: WebsocketServer;

    constructor(params: ConfigWebsocketI, options: ClientOptions | ServerOptions = {}){
        if(params.client){
            this.client = new WebsocketClient(params.client, options);
        }

        if(params.server){
            this.server = new WebsocketServer(params.server, options);
        }
    }
}

export default Websocket;