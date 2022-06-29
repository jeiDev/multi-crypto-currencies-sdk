import { ClientOptions } from "ws";
import { WebsocketBlockDaemonI, ResponseOnMessageCallbackBlockDaemonI } from "../../../interfaces/blockdaemon/blockdaemon.interface";
import Websocket from "../../websocket";

class BlockDaemonWebsocket extends Websocket{
    private readonly subscriptions = new Map();

    constructor(params: WebsocketBlockDaemonI, options: ClientOptions = {}){
        super({client: params}, options);
        this.started();
    }

    private started(){
        this.onMessage();
    }

    private onMessage(){
        this.client?.subscribeMessage((response: ResponseOnMessageCallbackBlockDaemonI) => {
            let subscriptions: Array<Function> = this.subscriptions.get(response.channel) || [];
            subscriptions.forEach((callback) => callback(response.data));
        })
    }

    public subscribe(channel: string, params: Object, callback: Function) {
        let subscriptions: Array<Function> = [];
        if (this.subscriptions.has(channel)) {
            subscriptions = this.subscriptions.get(channel);
        }

        subscriptions.push(callback);
        this.client?.send({ id: 1, method: "ubiquity.subscribe", params: { channel, ...(params || {})} });
    }

    public start(){
        return new Promise((resolve) => {
            if(this.client?.connected){
                this.client.connected = () => {
                    resolve(true);
                }
    
                this.client?.start();
            }
        })
    }
}

export default BlockDaemonWebsocket;