import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDependentOnFieldType1727442605129 implements MigrationInterface {
    name = 'FixDependentOnFieldType1727442605129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_questions" DROP COLUMN "dependentOn"`);
        await queryRunner.query(`ALTER TABLE "care_questions" ADD "dependentOn" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_questions" DROP COLUMN "dependentOn"`);
        await queryRunner.query(`ALTER TABLE "care_questions" ADD "dependentOn" text array`);
    }

}
