import { ProtocolBlockDaemonConfigI } from "../blockdaemon/blockdaemon.type"

export interface ConfigClientWebsocketI{
    token: string
    url: string
}

export interface ConfigServerWebsocketI{
}

export interface ConfigWebsocketI{
    client?: ConfigClientWebsocketI
    server?: ConfigServerWebsocketI
}
