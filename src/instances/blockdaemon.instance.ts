import configs from "../config";
import { replaceUrlString } from "../helpers/string.helper";
import BlockDaemon from "../libs/blockdaemon";
import Bitcoin from "../libs/core/bitcoin";
import blockdaemonMemory from "../memory/blockdaemon.memory";

const config = configs.blockDaemon;

const blockDaemon = {
    connect: () => {
        return Promise.all(config.protocols.map(async protocol => {
            const instance = new BlockDaemon({
                protocol,
                token: config.apiKey,
                rpc: {
                    api: replaceUrlString(config.apiRPC, {
                        protocol,
                        network: config.network
                    })  
                },
                websocket: {
                    url: replaceUrlString(config.apiWebSocket, {
                        protocol,
                        network: config.network
                    }) 
                }
            });

            if(protocol == "bitcoin"){
                let rpc: Bitcoin = instance.rpc;
                // instance.rpc?.wallet
                rpc.wallet.create({name: "test"}).then(resp => {
                    console.log({resp})
                }).catch(error => {
                    console.log({error})
                })
            }

            await instance.start();
            blockdaemonMemory.add(protocol, instance);
        }))
    }
}

export default blockDaemon;