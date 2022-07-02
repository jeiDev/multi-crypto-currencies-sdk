import { RPCProtocolEntity } from "../../database/entities/rpc-protocol.entity";
import protocolMemory from "../../memory/protocol.memory";

export default () => {
    return new Promise((resolve) => {
        RPCProtocolEntity.find().then(protocols => {

            Promise.all(protocols.map(protocol => {
                protocolMemory.add(protocol.name, protocol);
            })).then(resolve);

        }).catch(error => {
            console.error("Cannot loaded rcp protocols", {error});
        })
    })
}