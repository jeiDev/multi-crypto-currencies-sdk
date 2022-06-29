import configs from "../../config";
import blockdaemonMemory from "../../memory/blockdaemon.memory";

export default () => {
    return Promise.all(configs.blockDaemon.protocols.map(protocol => {
        // let instance = blockdaemonMemory.get(protocol);
        // console.log("subscribe")
        // instance.websocket?.subscribe("ubiquity.block_identifiers", {}, (data: any) => {
        //     console.log("ubiquity.block_identifiers", {data})
        // })

        // instance.websocket?.subscribe("ubiquity.blocks", {}, (data: any) => {
        //     console.log("ubiquity.blocks", {data})
        // })
    }))
}