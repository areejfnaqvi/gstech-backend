import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCareQuestionsTable1726778499523
    implements MigrationInterface
{
    name = 'CreateCareQuestionsTable1726778499523';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "care_questions" ("description" character varying NOT NULL, "questionID" character varying NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_07e7e34ad7de2757a8583b4e541" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "care_questions"`);
    }
}
