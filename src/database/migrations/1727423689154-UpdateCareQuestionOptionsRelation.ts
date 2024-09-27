import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCareQuestionOptionsRelation1727423689154
    implements MigrationInterface
{
    name = 'UpdateCareQuestionOptionsRelation1727423689154';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_question_options" DROP CONSTRAINT "FK_219e06b1f48069fdccd53012804"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_question_options" ALTER COLUMN "questionID" DROP NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_question_options" ADD CONSTRAINT "FK_219e06b1f48069fdccd53012804" FOREIGN KEY ("questionID") REFERENCES "care_questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_question_options" DROP CONSTRAINT "FK_219e06b1f48069fdccd53012804"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_question_options" ALTER COLUMN "questionID" SET NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_question_options" ADD CONSTRAINT "FK_219e06b1f48069fdccd53012804" FOREIGN KEY ("questionID") REFERENCES "care_questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }
}
