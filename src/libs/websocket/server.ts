import { ServerOptions } from "ws";
import { ConfigServerWebsocketI } from "../../interfaces/websocket/websocket.interface";

class WebsocketServer{
    private readonly config: ConfigServerWebsocketI;

    constructor(config: ConfigServerWebsocketI, headers: ServerOptions = {}){
        this.config = config;
    }
}

export default WebsocketServer;