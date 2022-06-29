import WebSocket, {ClientOptions} from "ws";
import { ObjectDynamic } from "../../interfaces/general/general.interface";
import { ConfigClientWebsocketI } from "../../interfaces/websocket/websocket.interface";


class WebsocketClient {
    private ws: WebSocket;
    public config: ConfigClientWebsocketI;

    //? Callbacks
    public subscribeMessage: Function = () => {};
    public connected: Function = () => {};

    constructor(config: ConfigClientWebsocketI, options: ClientOptions = {}){
        this.ws = new WebSocket(config.url, options);
        this.config = config;
    }
    private _error(){
        this.ws.on("error", (error) => {
            console.log('Connection error', {error, config:  this.config});
        })
    }

    private _close(){
        this.ws.on("close", (error) => {
            console.log('echo-protocol Connection Closed', {error, config:  this.config});
        })
    }

    private _message(){
        this.ws.on("message", (data) => {
            console.log("message", {data: data.toString()})
            try {
                this.subscribeMessage(JSON.parse(data.toString()));
            } catch (error) {
                this.subscribeMessage(data.toString());
            }
        })
    }
    
    private listener(){
        this.ws.on("open", () => {
            this.connected();
            this._close();
            this._error();
            this._message();
        })
    }

    public send(data: ObjectDynamic){
        return new Promise((resolve) => {
            this.ws.send(JSON.stringify(data), (error) => {
                resolve(error);
            })
        })
    }

    public start(){
        this.listener();
    }
}

export default WebsocketClient;