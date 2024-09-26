import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCareQuestionOptionsField1727384671377 implements MigrationInterface {
    name = 'UpdateCareQuestionOptionsField1727384671377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_question_options" DROP COLUMN "questionID"`);
        await queryRunner.query(`ALTER TABLE "care_question_options" ADD "questionID" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "care_question_options" ADD CONSTRAINT "FK_219e06b1f48069fdccd53012804" FOREIGN KEY ("questionID") REFERENCES "care_questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_question_options" DROP CONSTRAINT "FK_219e06b1f48069fdccd53012804"`);
        await queryRunner.query(`ALTER TABLE "care_question_options" DROP COLUMN "questionID"`);
        await queryRunner.query(`ALTER TABLE "care_question_options" ADD "questionID" character varying NOT NULL`);
    }

}
