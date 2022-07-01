import { ProtocolBlockDaemonConfigI } from "../blockdaemon/blockdaemon.type"

export interface ConfigClientWebsocketI{
    url: string
    protocol?: ProtocolBlockDaemonConfigI | string
}

export interface ConfigServerWebsocketI{
}

export interface ConfigWebsocketI{
    client?: ConfigClientWebsocketI
    server?: ConfigServerWebsocketI
}
