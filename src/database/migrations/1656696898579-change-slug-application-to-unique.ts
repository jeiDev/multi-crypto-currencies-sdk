import { MigrationInterface, QueryRunner } from "typeorm";

export class changeSlugApplicationToUnique1656696898579 implements MigrationInterface {
    name = 'changeSlugApplicationToUnique1656696898579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "applications" ADD CONSTRAINT "UQ_7482543b92c5b8b51b988f890e5" UNIQUE ("slug")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "applications" DROP CONSTRAINT "UQ_7482543b92c5b8b51b988f890e5"`);
    }

}
