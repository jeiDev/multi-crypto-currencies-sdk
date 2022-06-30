import { Column, Entity, Generated, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { WalletEntity } from "./wallet.entity";

@Entity({ name: "bitcoin-wallets" })
export class BitcoinWalletEntity {
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Column({ type: "text" })
    identifier: string;

    @Column({ type: "text" })
    passphrase: string;

    @Column({ type: "text" })
    privKey: string;

    @Column()
    walletId: number;

    @OneToOne(() => WalletEntity)
    @JoinColumn({referencedColumnName: "id", name: "walletId"})
    wallet: WalletEntity;
}
