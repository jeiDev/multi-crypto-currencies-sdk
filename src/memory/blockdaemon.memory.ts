import { ProtocolBlockDaemonConfigI } from "../interfaces/blockdaemon/blockdaemon.type";
import BlockDaemon from "../libs/blockdaemon";

const blockDaemonMemory = new Map();

export default {
    add: (key: ProtocolBlockDaemonConfigI | string, instance: BlockDaemon): void => {
        blockDaemonMemory.set(key, instance);
    },

    get: (key: ProtocolBlockDaemonConfigI | string): BlockDaemon => {
        return blockDaemonMemory.get(key);
    },

    remove: (key: ProtocolBlockDaemonConfigI | string) => {
        blockDaemonMemory.delete(key);
    }
}