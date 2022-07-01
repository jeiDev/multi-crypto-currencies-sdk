import { ProtocolEnum } from "../../../interfaces/protocol/protocol.enum";
import BitcoinRCPBlockDaemon from "./bitcoin";

export default {
    [ProtocolEnum.BITCOIN]: BitcoinRCPBlockDaemon
}