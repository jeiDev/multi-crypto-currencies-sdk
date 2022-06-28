import { ConfigClientWebsocketI } from "../websocket/websocket.interface"
import { ProtocolBlockDaemonConfigI } from "./blockdaemon.type"

export interface ResponseOnMessageCallbackBlockDaemonI{
    channel: string
    data: any
}

export interface WebsocketBlockDaemonI extends ConfigClientWebsocketI{}

export interface RPCBlockDaemonI {
    api: string
}

export interface BlockDaemonI{
    protocol: ProtocolBlockDaemonConfigI | string
    token: string
    websocket?: WebsocketBlockDaemonI
    rpc: RPCBlockDaemonI
}