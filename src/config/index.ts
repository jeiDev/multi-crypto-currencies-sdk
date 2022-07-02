import 'dotenv/config';
import path from "path";
import { BlockDaemonConfigI, ConfigI, CookieI, DBI, ServerI } from '../interfaces/config/config.interface';

const server: ServerI = {
    isProd: ["production"].includes(`${process.env.NODE_ENV}`),
    isLive: ["production", "staging"].includes(`${process.env.NODE_ENV}`),
    port: parseInt(`${process.env.PORT}`),
    nodeEnv: `${process.env.NODE_ENV}`,
    user: `${process.env.SERVER_USER}`,
    password: `${process.env.SERVER_PASSWORD}`
}

const db: DBI = {
    name: `${process.env.TYPEORM_DB_NAME}`,
    type: "postgres",
    url: `${process.env.TYPEORM_DB_URL}`,
    host: `${process.env.TYPEORM_DB_HOST}`,
    port: parseInt(`${process.env.TYPEORM_DB_PORT}`),
    username: `${process.env.TYPEORM_DB_USERNAME}`,
    password: `${process.env.TYPEORM_DB_PASSWORD}`,
    database: `${process.env.TYPEORM_DB_DATABASE}`,
    ssl: process.env.TYPEORM_DB_EXTRA_SSL === "true",
    schema: process.env.TYPEORM_DB_SCHEMA || "public",
    synchronize: process.env.TYPEORM_DB_SYNCHRONIZE === "true",
    logging: process.env.TYPEORM_DB_LOGGING === "true",
    autoReconnect: process.env.TYPEORM_DB_AUTO_RECONNECT === "true",
    reconnectTries: parseInt(`${process.env.TYPEORM_DB_AUTO_RECONNECT_TRIES}`),
    reconnectInterval: parseInt(`${process.env.TYPEORM_DB_AUTO_RECONNECT_INTERVAL}`),
    ...(server.isProd) && {
        extra: {
            ssl: {
                rejectUnauthorized: process.env.TYPEORM_DB_EXTRA_SSL_REJECT_UNAUTHORIZED === "true",
            },
        },
    },
    entities: [
        path.join(__dirname, "/../database/entities/**/*.entity.{ts,js}"),
        path.join(__dirname, "/../database/entities/*.view.{ts,js}"),
    ],
    migrations: [
        path.join(__dirname, "/../database/migrations/*.{ts,js}")
    ],
    seeds: [
        path.join(__dirname, "/../database/seeding/seeds/*.seed.{ts,js}")
    ],
    factories: [
        path.join(__dirname, "/../database/seeding/factories/*.factory.{ts,js}")
    ],
    subscribers: [
        path.join(__dirname, "/../database/subscribers/*.{ts,js}")
    ],
    cli: {
       entitiesDir: path.join(__dirname, "/../database/entities"),
       migrationsDir: path.join(__dirname, "/../database/migrations"),
       subscribersDir: path.join(__dirname, "/../database/subscribers")
    }
}

const blockDaemon: BlockDaemonConfigI = {
    network: `${process.env.NETWORK_BLOCKDAEMON}`,
    protocols: `${process.env.PROTOCOL_BLOCKDAEMON}`.split(","),
    apiKeyWebsocket: `${process.env.API_KEY_WEBSOCKET_BLOCKDAEMON}`,
    apiWebSocket: `${process.env.API_WEBSOCKET_BLOCKDAEMON}`,
    apiRPC: `${process.env.API_RPC_BLOCKDAEMON}`
}

const cookie: CookieI = {
    domain: `${process.env.COOKIE_DOMAIN}`,
    secret: `${process.env.COOKIE_SECRET}`,
    maxAge: (((24 * 60) * 60) * 1000),
    secure: server.isLive
}

const configs: ConfigI = {
    blockDaemon,
    server,
    db,
    cookie
}

export default configs;