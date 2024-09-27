import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCareQuestionOptionsTable1727384121907
    implements MigrationInterface
{
    name = 'CreateCareQuestionOptionsTable1727384121907';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "care_question_options" ("id" SERIAL NOT NULL, "questionID" character varying NOT NULL, "option" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_758aa658cdc08bd7f3a0f1d841b" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_questions" ADD "type" character varying NOT NULL`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_questions" DROP COLUMN "type"`,
        );
        await queryRunner.query(`DROP TABLE "care_question_options"`);
    }
}
