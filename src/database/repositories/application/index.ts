import { CreateApplicationResponse } from '../../../interfaces/entity/application/application.interface';
import { ProtocolType } from '../../../interfaces/protocol/protocol.type';
import { dbConnection } from '../../connection';
import { ApplicationEntity } from '../../entities/application.entity';
import createApplication from "./create";

export const applicationRepository = dbConnection.getRepository(ApplicationEntity).extend({
    createApplication: function(name: string, protocols: Array<ProtocolType>): Promise<CreateApplicationResponse> {
        return createApplication(name, protocols, this);
    }
});
