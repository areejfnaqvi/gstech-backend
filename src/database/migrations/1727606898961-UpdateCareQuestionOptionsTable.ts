import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCareQuestionOptionsTable1727606898961 implements MigrationInterface {
    name = 'UpdateCareQuestionOptionsTable1727606898961'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_questions" DROP COLUMN "dependentOn"`);
        await queryRunner.query(`ALTER TABLE "care_questions" ADD "dependentOn" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_questions" DROP COLUMN "dependentOn"`);
        await queryRunner.query(`ALTER TABLE "care_questions" ADD "dependentOn" text array`);
    }

}
