import 'dotenv/config';
import { ConfigI } from '../interfaces/config/config.interface';

const configs: ConfigI = {
    blockDaemon: {
        network: `${process.env.NETWORK_BLOCKDAEMON}`,
        protocols: `${process.env.PROTOCOL_BLOCKDAEMON}`.split(","),
        apiKey: `${process.env.API_KEY_BLOCKDAEMON}`,
        apiWebSocket: `${process.env.API_WEBSOCKET_BLOCKDAEMON}`,
        apiRPC: `${process.env.API_RPC_BLOCKDAEMON}`
    }
}

export default configs;