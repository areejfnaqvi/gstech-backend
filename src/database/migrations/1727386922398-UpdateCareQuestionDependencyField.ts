import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCareQuestionDependencyField1727386922398
    implements MigrationInterface
{
    name = 'UpdateCareQuestionDependencyField1727386922398';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_questions" ADD "isDependent" text array`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_questions" DROP COLUMN "isDependent"`,
        );
    }
}
