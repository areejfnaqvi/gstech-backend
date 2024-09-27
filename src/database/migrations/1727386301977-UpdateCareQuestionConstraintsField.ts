import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCareQuestionConstraintsField1727386301977
    implements MigrationInterface
{
    name = 'UpdateCareQuestionConstraintsField1727386301977';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_questions" ADD "constraints" jsonb`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_questions" DROP COLUMN "constraints"`,
        );
    }
}
