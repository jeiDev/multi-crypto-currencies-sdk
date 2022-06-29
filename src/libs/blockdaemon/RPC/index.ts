import { ProtocolEnum } from "../../../interfaces/protocols/protocols.enum";
import BitcoinRCPBlockDaemon from "./bitcoin";

export default {
    [ProtocolEnum.BITCOIN]: BitcoinRCPBlockDaemon
}