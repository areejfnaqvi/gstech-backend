import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCareStatusField1727612385197 implements MigrationInterface {
    name = 'AddCareStatusField1727612385197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_questions" ADD "careStatus" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_questions" DROP COLUMN "careStatus"`);
    }

}
