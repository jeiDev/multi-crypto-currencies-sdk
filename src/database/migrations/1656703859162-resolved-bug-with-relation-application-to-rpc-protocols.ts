import { MigrationInterface, QueryRunner } from "typeorm";

export class resolvedBugWithRelationApplicationToRpcProtocols1656703859162 implements MigrationInterface {
    name = 'resolvedBugWithRelationApplicationToRpcProtocols1656703859162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "applications-protocols" DROP CONSTRAINT "FK_bf50ced6820e66c247bdbbc42da"`);
        await queryRunner.query(`ALTER TABLE "applications-protocols" DROP CONSTRAINT "FK_fd75e573376ac541f48616d0637"`);
        await queryRunner.query(`ALTER TABLE "applications-protocols" ADD CONSTRAINT "FK_fd75e573376ac541f48616d0637" FOREIGN KEY ("applicationId") REFERENCES "applications"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "applications-protocols" ADD CONSTRAINT "FK_bf50ced6820e66c247bdbbc42da" FOREIGN KEY ("protocolId") REFERENCES "rpc-protocols"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "applications-protocols" DROP CONSTRAINT "FK_bf50ced6820e66c247bdbbc42da"`);
        await queryRunner.query(`ALTER TABLE "applications-protocols" DROP CONSTRAINT "FK_fd75e573376ac541f48616d0637"`);
        await queryRunner.query(`ALTER TABLE "applications-protocols" ADD CONSTRAINT "FK_fd75e573376ac541f48616d0637" FOREIGN KEY ("applicationId") REFERENCES "rpc-protocols"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "applications-protocols" ADD CONSTRAINT "FK_bf50ced6820e66c247bdbbc42da" FOREIGN KEY ("protocolId") REFERENCES "applications"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
