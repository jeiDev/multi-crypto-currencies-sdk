import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm"
import { Base } from "./base";
import { RPCProtocolEntity } from "./rpc-protocol.entity";
import { WalletEntity } from "./wallet.entity";

@Entity({ name: "applications" })
export class ApplicationEntity extends Base {
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Column({ type: "text" })
    name: string;

    @Column({ type: "text" })
    slug: string;
    
    @Column({ type: "text" })
    apiKey: string;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;

    @DeleteDateColumn({ type: "timestamptz" })
    deletedAt: Date;
    
    @ManyToMany(() => RPCProtocolEntity)
    @JoinTable({
        name: "applications-protocols",
        inverseJoinColumn: {
            name: "applicationId",
            referencedColumnName: "id"
        },
        joinColumn: {
            name: "protocolId",
            referencedColumnName: "id"
        }
    })
    rpcProtocols: RPCProtocolEntity[]

    @OneToMany(() => WalletEntity, wallet => wallet.application)
    wallets: WalletEntity[]
}
