import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCareQuestionOptionsTable1727553327325 implements MigrationInterface {
    name = 'UpdateCareQuestionOptionsTable1727553327325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_question_options" DROP CONSTRAINT "FK_219e06b1f48069fdccd53012804"`);
        await queryRunner.query(`ALTER TABLE "care_question_options" RENAME COLUMN "questionID" TO "optionID"`);
        await queryRunner.query(`CREATE TABLE "question_options" ("questionID" integer NOT NULL, "optionID" integer NOT NULL, CONSTRAINT "PK_fc2d27ad3008ba9c052007a66a2" PRIMARY KEY ("questionID", "optionID"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1fc095d202e9347e69279a5643" ON "question_options" ("questionID") `);
        await queryRunner.query(`CREATE INDEX "IDX_d693867784c85431d2b0c4b260" ON "question_options" ("optionID") `);
        await queryRunner.query(`ALTER TABLE "care_question_options" ALTER COLUMN "optionID" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "care_questions" DROP COLUMN "dependentOn"`);
        await queryRunner.query(`ALTER TABLE "care_questions" ADD "dependentOn" text array`);
        await queryRunner.query(`ALTER TABLE "question_options" ADD CONSTRAINT "FK_1fc095d202e9347e69279a5643e" FOREIGN KEY ("questionID") REFERENCES "care_questions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "question_options" ADD CONSTRAINT "FK_d693867784c85431d2b0c4b2604" FOREIGN KEY ("optionID") REFERENCES "care_question_options"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_options" DROP CONSTRAINT "FK_d693867784c85431d2b0c4b2604"`);
        await queryRunner.query(`ALTER TABLE "question_options" DROP CONSTRAINT "FK_1fc095d202e9347e69279a5643e"`);
        await queryRunner.query(`ALTER TABLE "care_questions" DROP COLUMN "dependentOn"`);
        await queryRunner.query(`ALTER TABLE "care_questions" ADD "dependentOn" jsonb`);
        await queryRunner.query(`ALTER TABLE "care_question_options" ALTER COLUMN "optionID" DROP NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d693867784c85431d2b0c4b260"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1fc095d202e9347e69279a5643"`);
        await queryRunner.query(`DROP TABLE "question_options"`);
        await queryRunner.query(`ALTER TABLE "care_question_options" RENAME COLUMN "optionID" TO "questionID"`);
        await queryRunner.query(`ALTER TABLE "care_question_options" ADD CONSTRAINT "FK_219e06b1f48069fdccd53012804" FOREIGN KEY ("questionID") REFERENCES "care_questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
