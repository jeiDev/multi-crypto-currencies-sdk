import { RPCProtocolEntity } from "../../database/entities/rpc-protocol.entity"
import { ConfigClientWebsocketI } from "../websocket/websocket.interface"
import { ProtocolBlockDaemonConfigI } from "./blockdaemon.type"

export interface ResponseOnMessageCallbackBlockDaemonI{
    channel: string
    data: any
}

export interface WebsocketBlockDaemonI extends ConfigClientWebsocketI{}

export interface BlockDaemonI{
    protocol: ProtocolBlockDaemonConfigI | string
    websocket?: WebsocketBlockDaemonI
    rpc: RPCProtocolEntity
}

export class RCPBlockDaemon{
    createWallet(name: string): Promise<any>{
        return new Promise(() => true);
    }
}