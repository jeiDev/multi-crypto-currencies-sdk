import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableBitcoinWalletsAndEthereumWallets1656616170204 implements MigrationInterface {
    name = 'createTableBitcoinWalletsAndEthereumWallets1656616170204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bitcoin-wallets" ("id" BIGSERIAL NOT NULL, "identifier" text NOT NULL, "passphrase" text NOT NULL, "privKey" text NOT NULL, "walletId" bigint NOT NULL, CONSTRAINT "REL_a7de031819bdcbac642b2af051" UNIQUE ("walletId"), CONSTRAINT "PK_03478167f08f32e7d080958e05b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ethereum-wallets" ("id" BIGSERIAL NOT NULL, "walletId" bigint NOT NULL, CONSTRAINT "REL_6850edea62586ccea4ad63d1b8" UNIQUE ("walletId"), CONSTRAINT "PK_20a8d1e1919dcc5052e0d1bfe58" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bitcoin-wallets" ADD CONSTRAINT "FK_a7de031819bdcbac642b2af051a" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ethereum-wallets" ADD CONSTRAINT "FK_6850edea62586ccea4ad63d1b88" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ethereum-wallets" DROP CONSTRAINT "FK_6850edea62586ccea4ad63d1b88"`);
        await queryRunner.query(`ALTER TABLE "bitcoin-wallets" DROP CONSTRAINT "FK_a7de031819bdcbac642b2af051a"`);
        await queryRunner.query(`DROP TABLE "ethereum-wallets"`);
        await queryRunner.query(`DROP TABLE "bitcoin-wallets"`);
    }

}
