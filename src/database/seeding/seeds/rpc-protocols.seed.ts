import { Factory, Seeder } from "typeorm-seeding";
import { DataSource } from "typeorm";
import { RPCProtocolEntity, rpcProtocolNameEntity } from "../../entities/rpc-protocol.entity";
import { RPCProtocolSeedData } from "../data/rpc-protocol.data";

let index: number = 0;
export default class RPCProtocolSeed implements Seeder {
    public async run(factory: Factory, connection: DataSource): Promise<void> {
        let rpcProtocols: Array<RPCProtocolEntity> = await connection.query(`SELECT * FROM "${rpcProtocolNameEntity}"`);
        let _data = RPCProtocolSeedData.filter(rpcProtocol => ((rpcProtocols.findIndex(_d => (
            _d.api == rpcProtocol.api &&
            _d.apiKey == rpcProtocol.apiKey &&
            _d.cryptoCurrency == rpcProtocol.cryptoCurrency &&
            _d.name == rpcProtocol.name
        )))))
        
        await factory(RPCProtocolEntity)().map(async (RPCProtocol) => {
            let data = _data[index];

            RPCProtocol.api = data.api;
            RPCProtocol.apiKey = data.apiKey;
            RPCProtocol.cryptoCurrency = data.cryptoCurrency;
            RPCProtocol.name = data.name;

            index += 1;

            return RPCProtocol;
        }).createMany(_data.length);
        
    }
}