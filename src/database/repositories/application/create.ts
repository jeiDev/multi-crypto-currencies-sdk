import { Repository } from "typeorm";
import { errorCreateApplicationHelper } from "../../../helpers/error.helper";
import { CreateApplicationResponse } from "../../../interfaces/entity/application/application.interface";
import { ProtocolType } from "../../../interfaces/protocol/protocol.type";
import { ApplicationEntity } from "../../entities/application.entity";
import protocolMemory from "../../../memory/protocol.memory";

export default (name: string, protocols: Array<ProtocolType>, entity: Repository<ApplicationEntity>): Promise<CreateApplicationResponse> => {
    return new Promise((resolve) => {
        return Promise.all(protocols.map(protocol => {

            let select = protocolMemory.get(protocol);
            return select;

        }).filter(p => (p))).then(_protocols => {
            if(protocols.length !== _protocols.length) return resolve({data: null, error: {message: "Invalids protocols"}});

            entity.create({ name, rpcProtocols: _protocols }).save().then(data => {
                return resolve({ data, error: null })
            }).catch(error => {
                let message: string = errorCreateApplicationHelper[error.routine] || "An unexpected error has occurred. please try again";
                return resolve({ data: null, error: {message} })
            })
        })
    })
}