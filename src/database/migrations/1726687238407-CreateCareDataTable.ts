import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCareDataTable1726687238407 implements MigrationInterface {
    name = 'CreateCareDataTable1726687238407';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "care_data" ("countyOfResidence" character varying NOT NULL, "healthCareCoverageStatus" character varying NOT NULL, "immigrationStatus" character varying NOT NULL, "veteran" boolean NOT NULL, "employmentStatus" character varying NOT NULL, "genderIdentification" character varying NOT NULL, "sexualOrientation" character varying NOT NULL, "preferredLanguage" character varying NOT NULL, "disability" boolean NOT NULL, "ethnicity" character varying NOT NULL, "race" character varying NOT NULL, "sex" character varying NOT NULL, "originalPetitioner" character varying NOT NULL, "dateOfInvestigation" character varying NOT NULL, "petitionFileDate" character varying NOT NULL, "petitionCaseNumber" integer NOT NULL, "ssn" integer NOT NULL, "age" integer NOT NULL, "lastName" character varying NOT NULL, "firstName" character varying NOT NULL, "County" character varying NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1125f2f001414d212f0032ced9d" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "care_data"`);
    }
}
