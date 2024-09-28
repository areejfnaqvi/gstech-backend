import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCareFormDataTable1727346433528
    implements MigrationInterface
{
    name = 'CreateCareFormDataTable1727346433528';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "care_form_data" ("id" SERIAL NOT NULL, "submittedByEmail" character varying NOT NULL, "submittedByName" character varying NOT NULL, "3.3.1" character varying, "3.3.2" character varying, "3.3.3" character varying, "3.3.4" integer, "3.3.5" integer NOT NULL, "3.3.6" integer, "3.3.7" TIMESTAMP, "3.3.8" TIMESTAMP, "3.3.9" character varying, "3.4.1" character varying, "3.4.2" character varying, "3.4.3" character varying, "3.4.6" character varying, "3.4.7" character varying, "3.4.8" character varying, "3.4.9" character varying, "3.4.10" character varying, "3.4.11" character varying, "3.4.12" character varying, "3.4.13" character varying, "3.4.14" character varying, "3.4.4" character varying, "3.4.5" character varying, "3.3.10" character varying, "3.6.1" character varying, "3.6.2" character varying, "3.8.1" integer, "3.8.2" boolean, "3.9.1" character varying, "3.9.2" integer, "3.9.3" integer, "3.9.4" integer, "3.9.5" integer, "3.11.1" boolean, "3.11.2" character varying, "3.11.3" character varying, "3.11.4" character varying, "3.11.5" boolean, "3.11.6" TIMESTAMP, "3.13.1" integer, "3.13.2" integer, "3.3.11" TIMESTAMP, "3.5.1" character varying, "3.5.6" boolean, "3.5.7" character varying, "3.5.8" boolean, "3.5.9" character varying, "3.5.13" character varying, "3.5.17" character varying, "3.5.21" character varying, "3.5.22" character varying, "3.5.23" character varying, "3.7.1" boolean, "3.7.2" boolean, "3.7.3" character varying, "3.7.4" character varying, "3.7.5" character varying, "3.7.6" character varying, "3.7.7" character varying, "3.10.1" boolean, "3.10.2" TIMESTAMP, "3.10.3" character varying, "3.5.2" character varying, "3.5.5" character varying, "3.5.3" character varying, "3.5.4" character varying, "3.5.10" character varying, "3.5.11" character varying, "3.5.12" character varying, "3.5.14" character varying, "3.5.15" character varying, "3.5.16" character varying, "3.5.18" character varying, "3.5.19" character varying, "3.5.20" character varying, "3.12.1" TIMESTAMP, "3.12.4" boolean, "3.12.5" character varying, "3.12.6" character varying, "3.12.2" TIMESTAMP, "3.12.3" TIMESTAMP, "3.3.12" TIMESTAMP, "3.3.13" character varying, "3.3.14" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_1386382a6da8833d852c757c4a7" UNIQUE ("3.3.5"), CONSTRAINT "PK_b6a94c02bbf8ea9c66107680c10" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "care_form_data"`);
    }
}
