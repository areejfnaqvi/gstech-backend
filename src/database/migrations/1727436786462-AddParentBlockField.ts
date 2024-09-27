import { MigrationInterface, QueryRunner } from "typeorm";

export class AddParentBlockField1727436786462 implements MigrationInterface {
    name = 'AddParentBlockField1727436786462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_questions" ADD "parentBlock" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_questions" DROP COLUMN "parentBlock"`);
    }

}
