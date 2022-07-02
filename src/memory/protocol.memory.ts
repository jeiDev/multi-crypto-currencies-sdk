import { RPCProtocolEntity } from "../database/entities/rpc-protocol.entity";
import { ProtocolType } from "../interfaces/protocol/protocol.type";

const protocolMemory = new Map();

export default {
    add: (key: ProtocolType | string, instance: RPCProtocolEntity): void => {
        protocolMemory.set(key, instance);
    },

    get: (key: ProtocolType | string): RPCProtocolEntity => {
        return protocolMemory.get(key);
    },

    remove: (key: ProtocolType | string) => {
        protocolMemory.delete(key);
    },

    getKeys: (): Array<string> => {
        return Array.from(protocolMemory.keys());
    }
}