import { configRPC } from "../../../../interfaces/blockdaemon/RPC/rpc.enum";
import { ProtocolEnum } from "../../../../interfaces/protocol/protocol.enum";
import Bitcoin from "../../../core/bitcoin";
import configs from "../../../../config";

const defaultData = configRPC[ProtocolEnum.BITCOIN];
const token: string = configs.blockDaemon.apiKeyWebsocket;

class BitcoinRCPBlockDaemon extends Bitcoin{
    constructor(api: string){
        super(api, defaultData, token);
    }
}

export default BitcoinRCPBlockDaemon;