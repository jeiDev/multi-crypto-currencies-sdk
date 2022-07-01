import { configRPC } from "../../../../interfaces/blockdaemon/RPC/rpc.enum";
import { ProtocolEnum } from "../../../../interfaces/protocol/protocol.enum";
import Bitcoin from "../../../core/bitcoin";
import { RPCProtocolEntity } from "../../../../database/entities/rpc-protocol.entity";

const defaultData = configRPC[ProtocolEnum.BITCOIN];

class BitcoinRCPBlockDaemon extends Bitcoin{
    constructor(rpcProtocol: RPCProtocolEntity){
        super(rpcProtocol.api, defaultData, rpcProtocol.apiKey);
    }

    createWallet(name: string){
        return this.wallet.create({name, loadOnStartup: true});
    }
}

export default BitcoinRCPBlockDaemon;