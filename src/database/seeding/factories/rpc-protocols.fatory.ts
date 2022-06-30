import { define } from "typeorm-seeding";
import { CryptoCurrencyRPCProtocolEnum } from "../../../interfaces/entity/rpc-protocol/rpc-protocol.enum";

import { RPCProtocolEntity } from "../../entities/rpc-protocol.entity";

define(RPCProtocolEntity, () => {
  const RPCProtocol = new RPCProtocolEntity();

  RPCProtocol.api = "";
  RPCProtocol.apiKey = "";
  RPCProtocol.cryptoCurrency = CryptoCurrencyRPCProtocolEnum.BTC;
 
  return RPCProtocol;
});