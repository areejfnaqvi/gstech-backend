import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCareQuestionDependencyFieldName1727387011194
    implements MigrationInterface
{
    name = 'UpdateCareQuestionDependencyFieldName1727387011194';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_questions" RENAME COLUMN "isDependent" TO "dependentOn"`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_questions" RENAME COLUMN "dependentOn" TO "isDependent"`,
        );
    }
}
