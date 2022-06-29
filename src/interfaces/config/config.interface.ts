import { ProtocolBlockDaemonConfigI } from "../blockdaemon/blockdaemon.type"

export interface BlockDaemonConfigI{
    protocols: Array<ProtocolBlockDaemonConfigI | string>
    network: string
    apiWebSocket: string
    apiKeyWebsocket: string
    apiRPC: string
}

export interface ConfigI{
    blockDaemon: BlockDaemonConfigI
}