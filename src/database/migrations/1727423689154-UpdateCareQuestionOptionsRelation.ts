import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCareQuestionOptionsRelation1727423689154
    implements MigrationInterface
{
    name = 'UpdateCareQuestionOptionsRelation1727423689154';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_question_options" ALTER COLUMN "questionID" DROP NOT NULL`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_question_options" ALTER COLUMN "questionID" SET NOT NULL`,
        );
    }
}
