import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableApplications1656613075058 implements MigrationInterface {
    name = 'createTableApplications1656613075058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "applications" ("id" BIGSERIAL NOT NULL, "name" text NOT NULL, "slug" text NOT NULL, "apiKey" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_938c0a27255637bde919591888f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "applications-protocols" ("protocolId" bigint NOT NULL, "applicationId" bigint NOT NULL, CONSTRAINT "PK_21166bd4a051e56757df91c7bb4" PRIMARY KEY ("protocolId", "applicationId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bf50ced6820e66c247bdbbc42d" ON "applications-protocols" ("protocolId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fd75e573376ac541f48616d063" ON "applications-protocols" ("applicationId") `);
        await queryRunner.query(`ALTER TABLE "applications-protocols" ADD CONSTRAINT "FK_bf50ced6820e66c247bdbbc42da" FOREIGN KEY ("protocolId") REFERENCES "applications"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "applications-protocols" ADD CONSTRAINT "FK_fd75e573376ac541f48616d0637" FOREIGN KEY ("applicationId") REFERENCES "rpc-protocols"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "applications-protocols" DROP CONSTRAINT "FK_fd75e573376ac541f48616d0637"`);
        await queryRunner.query(`ALTER TABLE "applications-protocols" DROP CONSTRAINT "FK_bf50ced6820e66c247bdbbc42da"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fd75e573376ac541f48616d063"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bf50ced6820e66c247bdbbc42d"`);
        await queryRunner.query(`DROP TABLE "applications-protocols"`);
        await queryRunner.query(`DROP TABLE "applications"`);
    }

}
