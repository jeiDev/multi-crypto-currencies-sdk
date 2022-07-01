import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableRpcProtocol1656606791833 implements MigrationInterface {
    name = 'createTableRpcProtocol1656606791833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."rpc-protocols_name_enum" AS ENUM('bitcoin', 'ethereum')`);
        await queryRunner.query(`CREATE TYPE "public"."rpc-protocols_cryptocurrency_enum" AS ENUM('BTC', 'ETH')`);
        await queryRunner.query(`CREATE TABLE "rpc-protocols" ("id" BIGSERIAL NOT NULL, "api" text NOT NULL, "apiKey" text NOT NULL, "name" "public"."rpc-protocols_name_enum" NOT NULL, "cryptoCurrency" "public"."rpc-protocols_cryptocurrency_enum" NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_7c5f9501f515247a4508cf18c80" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "rpc-protocols"`);
        await queryRunner.query(`DROP TYPE "public"."rpc-protocols_cryptocurrency_enum"`);
        await queryRunner.query(`DROP TYPE "public"."rpc-protocols_name_enum"`);
    }

}
