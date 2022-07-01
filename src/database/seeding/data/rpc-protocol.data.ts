import { CryptoCurrencyRPCProtocolEnum, NameRPCProtocolEnum } from "../../../interfaces/entity/rpc-protocol/rpc-protocol.enum";
import { RPCProtocolSeedDataI } from "../../../interfaces/entity/rpc-protocol/rpc-protocol.interface";

export const RPCProtocolSeedData: Array<RPCProtocolSeedDataI> = [
    {
        api: "https://cat03u1430qagcmu7u20.bdnodes.net",
        apiKey: "vLApTrt_yejjje8BNUsVhb8-OZp3fGmLeOQufQImWxI",
        name: NameRPCProtocolEnum.BITCOIN,
        cryptoCurrency: CryptoCurrencyRPCProtocolEnum.BTC,
    }
]