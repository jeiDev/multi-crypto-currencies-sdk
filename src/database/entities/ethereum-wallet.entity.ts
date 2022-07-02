import { Column, Entity, Generated, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { WalletEntity } from "./wallet.entity";

@Entity({ name: "ethereum-wallets" })
export class EthereumWalletEntity {
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Column()
    walletId: number;

    @OneToOne(() => WalletEntity)
    @JoinColumn({referencedColumnName: "id", name: "walletId"})
    wallet: WalletEntity;
}
