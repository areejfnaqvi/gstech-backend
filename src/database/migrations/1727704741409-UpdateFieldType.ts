import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateFieldType1727704741409 implements MigrationInterface {
    name = 'UpdateFieldType1727704741409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_form_data" DROP COLUMN "3.4.2"`);
        await queryRunner.query(`ALTER TABLE "care_form_data" ADD "3.4.2" text array`);
        await queryRunner.query(`ALTER TABLE "care_form_data" DROP COLUMN "3.4.3"`);
        await queryRunner.query(`ALTER TABLE "care_form_data" ADD "3.4.3" text array`);
        await queryRunner.query(`ALTER TABLE "care_form_data" DROP COLUMN "3.4.6"`);
        await queryRunner.query(`ALTER TABLE "care_form_data" ADD "3.4.6" text array`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "care_form_data" DROP COLUMN "3.4.6"`);
        await queryRunner.query(`ALTER TABLE "care_form_data" ADD "3.4.6" character varying`);
        await queryRunner.query(`ALTER TABLE "care_form_data" DROP COLUMN "3.4.3"`);
        await queryRunner.query(`ALTER TABLE "care_form_data" ADD "3.4.3" character varying`);
        await queryRunner.query(`ALTER TABLE "care_form_data" DROP COLUMN "3.4.2"`);
        await queryRunner.query(`ALTER TABLE "care_form_data" ADD "3.4.2" character varying`);
    }

}
