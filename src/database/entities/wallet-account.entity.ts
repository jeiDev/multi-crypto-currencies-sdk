import { Column, DeleteDateColumn, Entity, Generated, ManyToOne, PrimaryColumn } from "typeorm"
import { WalletEntity } from "./wallet.entity";

@Entity({ name: "wallets-accounts" })
export class WalletAccountEntity {
    @Generated('increment')
    @PrimaryColumn("int8")
    id: number;

    @Column({ type: "text" })
    label: string;

    @Column()
    index: number;

    @Column()
    walletId: number;

    @DeleteDateColumn({ type: "timestamptz" })
    deletedAt: Date;

    @ManyToOne(() => WalletEntity, wallet => wallet.accounts)
    wallet: WalletEntity;
}
