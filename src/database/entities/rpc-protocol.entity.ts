import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryColumn } from "typeorm";
import { CryptoCurrencyRPCProtocolEnum, NameRPCProtocolEnum } from "../../interfaces/entity/rpc-protocol/rpc-protocol.enum";
import { CryptoCurrencyType } from "../../interfaces/entity/rpc-protocol/rpc-protocol.type";
import { Base } from "./base";

export const rpcProtocolNameEntity = "rpc-protocols";

@Entity({ name: rpcProtocolNameEntity })
export class RPCProtocolEntity extends Base {
    @Generated('increment')
    @PrimaryColumn("int8")
    id?: number;

    @Column({ type: "text" })
    api: string;

    @Column({ type: "text" })
    apiKey: string;

    @Column({
        type: "enum",
        enum: NameRPCProtocolEnum
    })
    name: NameRPCProtocolEnum;

    @Column({
        type: "enum",
        enum: CryptoCurrencyRPCProtocolEnum
    })
    cryptoCurrency: CryptoCurrencyType;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt?: Date;

    @DeleteDateColumn({ type: "timestamptz" })
    deletedAt?: Date;
}
