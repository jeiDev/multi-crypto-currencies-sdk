import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm"
import { Base } from "./base";
import { RPCProtocolEntity } from "./rpc-protocol.entity";
import { WalletEntity } from "./wallet.entity";

@Entity({ name: "applications" })
export class ApplicationEntity extends Base {
    @Exclude({ toPlainOnly: true })
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Column({ type: "text" })
    name: string;

    @Exclude({ toPlainOnly: true })
    @Column({ type: "text", unique: true })
    slug: string;
    
    @Column({ type: "text" })
    apiKey: string;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;

    @Exclude({ toPlainOnly: true })
    @DeleteDateColumn({ type: "timestamptz" })
    deletedAt: Date;
    
    @Exclude({ toPlainOnly: true })
    @ManyToMany(() => RPCProtocolEntity)
    @JoinTable({
        name: "applications-protocols",
        inverseJoinColumn: {
            name: "protocolId",
            referencedColumnName: "id" 
        },
        joinColumn: {
            name: "applicationId",
            referencedColumnName: "id"
        }
    })
    rpcProtocols: RPCProtocolEntity[]

    @OneToMany(() => WalletEntity, wallet => wallet.application)
    wallets: WalletEntity[]
}
