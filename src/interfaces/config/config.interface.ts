import { ProtocolBlockDaemonConfigI } from "../blockdaemon/blockdaemon.type"

export interface BlockDaemonConfigI{
    protocols: Array<ProtocolBlockDaemonConfigI | string>
    network: string
    apiWebSocket: string
    apiKeyWebsocket: string
    apiRPC: string
}

export interface ExtraSSL {
    ssl: {
        rejectUnauthorized: boolean
    }
}

export interface DBI {
    name: string
    type: string
    url: string
    host: string
    port: number
    username: string
    password: string
    database: string
    ssl: boolean
    schema: string
    synchronize: boolean
    logging: boolean
    autoReconnect: boolean
    reconnectTries: number
    reconnectInterval: number
    extra?: ExtraSSL
    entities: Array<string>
    migrations: Array<string>
    seeds: Array<string>
    factories: Array<string>
    subscribers: Array<string>
    cli?: { [key: string]: string }
}

export interface ServerI {
    nodeEnv: string
    port: number
    isProd: boolean
    isLive: boolean
}

export interface CookieI {
   secret: string
   domain: string
   secure: boolean
   maxAge: number
}

export interface ConfigI{
    blockDaemon: BlockDaemonConfigI
    db: DBI
    server: ServerI
    cookie: CookieI
}