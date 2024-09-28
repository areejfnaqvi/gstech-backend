import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCareQuestionOptionsField1727384671377
    implements MigrationInterface
{
    name = 'UpdateCareQuestionOptionsField1727384671377';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_question_options" DROP COLUMN "questionID"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_question_options" ADD "questionID" integer NOT NULL`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_question_options" DROP COLUMN "questionID"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_question_options" ADD "questionID" character varying NOT NULL`,
        );
    }
}
