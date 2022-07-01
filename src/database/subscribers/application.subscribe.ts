import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from "typeorm"
import { generateRandomToken } from "../../helpers/token.helper";
import { ApplicationEntity } from "../entities/application.entity";

@EventSubscriber()
export class ApplicationSubscribe implements EntitySubscriberInterface<ApplicationEntity> {
    listenTo(){
        return ApplicationEntity;
    }

    beforeInsert(event: InsertEvent<ApplicationEntity>){
        event.entity.apiKey = Buffer.from(generateRandomToken()).toString("base64");
        event.entity.slug = event.entity.name.replace(" ", "-").toLowerCase();
    }
}
