import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCareQuestionOptionsTable1727604552698 implements MigrationInterface {
    name = 'UpdateCareQuestionOptionsTable1727604552698'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "care_question_option_relations" ("questionID" integer NOT NULL, "optionID" integer NOT NULL, CONSTRAINT "PK_95eabe838e3639112657f3327f3" PRIMARY KEY ("questionID", "optionID"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e74e3c2bec29dfa990c32eb3e0" ON "care_question_option_relations" ("questionID") `);
        await queryRunner.query(`CREATE INDEX "IDX_f584930be271502e3677f4b1b4" ON "care_question_option_relations" ("optionID") `);
        await queryRunner.query(`ALTER TABLE "care_question_option_relations" ADD CONSTRAINT "FK_e74e3c2bec29dfa990c32eb3e00" FOREIGN KEY ("questionID") REFERENCES "care_questions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "care_question_option_relations" ADD CONSTRAINT "FK_f584930be271502e3677f4b1b4f" FOREIGN KEY ("optionID") REFERENCES "care_question_options"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_question_option_relations" DROP CONSTRAINT "FK_f584930be271502e3677f4b1b4f"`);
        await queryRunner.query(`ALTER TABLE "care_question_option_relations" DROP CONSTRAINT "FK_e74e3c2bec29dfa990c32eb3e00"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f584930be271502e3677f4b1b4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e74e3c2bec29dfa990c32eb3e0"`);
        await queryRunner.query(`DROP TABLE "care_question_option_relations"`);
    }

}
