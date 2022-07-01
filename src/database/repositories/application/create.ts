import { Repository } from "typeorm";
import { errorCreateApplicationHelper } from "../../../helpers/error.helper";
import { CreateApplicationResponse } from "../../../interfaces/entity/application/application.interface";
import { ProtocolType } from "../../../interfaces/protocol/protocol.type";
import { ApplicationEntity } from "../../entities/application.entity";


export default (name: string, protocols: Array<ProtocolType>, entity: Repository<ApplicationEntity>): Promise<CreateApplicationResponse> => {
    return new Promise((resolve) => {
        entity.create({ name }).save().then(data => {
            return resolve({ data, error: null })
        }).catch(error => {
            let message: string = errorCreateApplicationHelper[error.routine] || "An unexpected error has occurred. please try again";
            return resolve({ data: null, error: {message} })
        })
    })
}