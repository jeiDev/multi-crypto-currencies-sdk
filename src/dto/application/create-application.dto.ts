import { Expose } from 'class-transformer';
import { IsEnum, IsString, IsNotEmpty } from 'class-validator';
import { ProtocolEnum } from '../../interfaces/protocol/protocol.enum';

export class CreateApplicationDTO {

    @IsString()
    @IsNotEmpty()
    @Expose() name: string;

    @IsEnum(ProtocolEnum, {
        each: true,
        message: `protocols must be one of the following values: ${Object.values(ProtocolEnum).join(", ")}`.trim()
    })
    @Expose() protocols: ProtocolEnum[];

}