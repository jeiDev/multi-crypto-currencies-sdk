import { NameRPCProtocolEnum } from "./rpc-protocol.enum";
import { CryptoCurrencyType } from "./rpc-protocol.type";

export interface RPCProtocolSeedDataI{
    api: string;
    apiKey: string;
    name: NameRPCProtocolEnum;
    cryptoCurrency: CryptoCurrencyType;
}