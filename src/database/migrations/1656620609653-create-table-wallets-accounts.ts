import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableWalletsAccounts1656620609653 implements MigrationInterface {
    name = 'createTableWalletsAccounts1656620609653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wallets-accounts" ("id" BIGSERIAL NOT NULL, "label" text NOT NULL, "index" integer NOT NULL, "walletId" bigint NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_1d2879ca1bd71286315fe82d51a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "wallets-accounts" ADD CONSTRAINT "FK_ff56bc7a7c44b8267e58c440e07" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wallets-accounts" DROP CONSTRAINT "FK_ff56bc7a7c44b8267e58c440e07"`);
        await queryRunner.query(`DROP TABLE "wallets-accounts"`);
    }

}
