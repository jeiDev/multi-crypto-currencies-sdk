import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableWallets1656614760085 implements MigrationInterface {
    name = 'createTableWallets1656614760085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."wallets_network_enum" AS ENUM('testnet', 'mainnet')`);
        await queryRunner.query(`CREATE TABLE "wallets" ("id" BIGSERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "network" "public"."wallets_network_enum" NOT NULL, "token" text NOT NULL, "applicationId" bigint NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_8402e5df5a30a229380e83e4f7e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "wallets" ADD CONSTRAINT "FK_62630fdc345a638ba37fad927af" FOREIGN KEY ("applicationId") REFERENCES "applications"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wallets" DROP CONSTRAINT "FK_62630fdc345a638ba37fad927af"`);
        await queryRunner.query(`DROP TABLE "wallets"`);
        await queryRunner.query(`DROP TYPE "public"."wallets_network_enum"`);
    }

}
