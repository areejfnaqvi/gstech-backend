import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCareDataTable1726723970523 implements MigrationInterface {
    name = 'CreateCareDataTable1726723970523';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_data" RENAME COLUMN "County" TO "county"`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_data" RENAME COLUMN "county" TO "County"`,
        );
    }
}
