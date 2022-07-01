import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm"
import { NetworkEnum } from "../../interfaces/blockdaemon/network/nertwork.enum";
import { ApplicationEntity } from "./application.entity";
import { Base } from "./base";
import { BitcoinWalletEntity } from "./bitcoin-wallet.entity";
import { EthereumWalletEntity } from "./ethereum-wallet.entity";
import { WalletAccountEntity } from "./wallet-account.entity";

@Entity({ name: "wallets" })
export class WalletEntity extends Base {
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Generated('uuid')
    @Column()
    uuid: string;

    @Column({ type: "text" })
    name: string;
    
    @Column({ 
        type: "enum",
        enum: NetworkEnum
    })
    network: NetworkEnum;

    @Column({ type: "text" })
    token: string;

    @Column()
    applicationId: number;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;

    @DeleteDateColumn({ type: "timestamptz" })
    deletedAt: Date;
    
    @ManyToOne(() => ApplicationEntity, application => application.wallets)
    application: ApplicationEntity;

    @OneToOne(() => BitcoinWalletEntity)
    bitcoin: BitcoinWalletEntity;

    @OneToOne(() => EthereumWalletEntity)
    ethereum: EthereumWalletEntity;

    @OneToMany(() => WalletAccountEntity, account => account.wallet)
    accounts: WalletAccountEntity[]
    
}
