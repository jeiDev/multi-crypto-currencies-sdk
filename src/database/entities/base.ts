import { BaseEntity } from 'typeorm'
import { instanceToPlain } from 'class-transformer';

export class Base extends BaseEntity {
    toJSON(): any {
        return instanceToPlain(this);
    }
}