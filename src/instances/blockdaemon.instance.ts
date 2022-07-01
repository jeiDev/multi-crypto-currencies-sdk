import configs from "../config";
import { replaceUrlString } from "../helpers/string.helper";
import BlockDaemon from "../libs/blockdaemon";
import Bitcoin from "../libs/core/bitcoin";
import protocolMemory from "../memory/protocol.memory";
import blockdaemonMemory from "../memory/blockdaemon.memory";

const config = configs.blockDaemon;

const blockDaemon = {
    connect: () => {
        let protocols = protocolMemory.getKeys();

        return Promise.all(protocols.map(async protocol => {
            const rpcProtocol = protocolMemory.get(protocol);
            const instance = new BlockDaemon({
                protocol,
                rpc: rpcProtocol,
                websocket: {
                    token: config.apiKeyWebsocket,
                    url: replaceUrlString(config.apiWebSocket, {
                        protocol,
                        network: config.network
                    }) 
                }
            });

            await instance.start();
            blockdaemonMemory.add(protocol, instance);
        }))
    }
}

export default blockDaemon;