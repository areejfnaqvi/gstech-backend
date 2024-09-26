import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCareDataTable1726773925409 implements MigrationInterface {
    name = 'CreateCareDataTable1726773925409';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "veteranStatus"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "graduation" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "reasonForTermination" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "terminationOfServicesDate" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "carePlanCompletionDate" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "carePlanOrderedDate" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "graduationPlan" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "outcomeOfOneYearStatusHearing" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "oneYearStatusHearing" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "careAgreementDate" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "reasonForSocialServicesAndSupportsNotProvided" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "socialServicesAndSupportsInCAREAgreementNotProvided" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "socialServicesAndSupportsInCAREAgreement" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "socialServicesAndSupportsProvided" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "reasonForCalAIMSupportsNotProvided" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "calAIMCommunitySupportsInCAREAgreementNotProvided" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "calAIMCommunitySupportsInCAREAgreement" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "reasonForSudServicesInCAREAgreementNotProvided" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "sudTreatmentServicesInCAREAgreementNotProvided" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "sudTreatmentServicesInCAREAgreement" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "reasonForMentalHealthServicesInCAREAgreementNotProvided" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "mentalHealthTreatmentServicesInCAREAgreementNotProvided" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "stabilizingMedicationsInCAREAgreement" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "mentalHealthTreatmentServicesInCAREAgreement" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "causeOfDeath" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "dateOfDeath" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "deathsAmongParticipants" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "alcoholFrequency" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "secondarySubstanceFrequency" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "secondarySubstanceUse" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "primarySubstanceFrequency" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "primarySubstanceUse" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "misuseOfIllegalControlledSubstances" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "diagnosedSubstanceAbuseDisorder" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "reasonForNotEngagingInFullServicePartnership" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "fullServicePartnershipProgram" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "specializedPrograms" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "calAIMCommunitySupportsProvided" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "substanceUseDisorderTreatmentServicesProvided" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "stabilizingMedicationsAdherence" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "typeOfStabilizingMedication" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "stabilizingMedications" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "mentalHealthTreatmentServicesProvided" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "petitionDismissalDate" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "emergencyDepartmentVisits" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "inpatientHospitalizations" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "dateOfPsychiatricAdvanceDirective" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "psychiatricAdvanceDirective" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "volunteerSupporterPresence" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "volunteerSupportersRelationship" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "volunteerSupporters" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "lawEnforcementContact" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "numberOfPrisonDays" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "numberOfJailDays" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "numberOfArrests" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "criminalJusticeStatus" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "lpsConservatorship" boolean NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "detentions" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "typeOfHousingSupport" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "housingStatus" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "careStatus" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "veteran" boolean NOT NULL`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "veteran"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "careStatus"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "housingStatus"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "typeOfHousingSupport"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "detentions"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "lpsConservatorship"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "criminalJusticeStatus"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "numberOfArrests"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "numberOfJailDays"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "numberOfPrisonDays"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "lawEnforcementContact"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "volunteerSupporters"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "volunteerSupportersRelationship"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "volunteerSupporterPresence"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "psychiatricAdvanceDirective"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "dateOfPsychiatricAdvanceDirective"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "inpatientHospitalizations"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "emergencyDepartmentVisits"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "petitionDismissalDate"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "mentalHealthTreatmentServicesProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "stabilizingMedications"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "typeOfStabilizingMedication"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "stabilizingMedicationsAdherence"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "substanceUseDisorderTreatmentServicesProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "calAIMCommunitySupportsProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "specializedPrograms"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "fullServicePartnershipProgram"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "reasonForNotEngagingInFullServicePartnership"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "diagnosedSubstanceAbuseDisorder"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "misuseOfIllegalControlledSubstances"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "primarySubstanceUse"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "primarySubstanceFrequency"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "secondarySubstanceUse"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "secondarySubstanceFrequency"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "alcoholFrequency"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "deathsAmongParticipants"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "dateOfDeath"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "causeOfDeath"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "mentalHealthTreatmentServicesInCAREAgreement"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "stabilizingMedicationsInCAREAgreement"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "mentalHealthTreatmentServicesInCAREAgreementNotProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "reasonForMentalHealthServicesInCAREAgreementNotProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "sudTreatmentServicesInCAREAgreement"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "sudTreatmentServicesInCAREAgreementNotProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "reasonForSudServicesInCAREAgreementNotProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "calAIMCommunitySupportsInCAREAgreement"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "calAIMCommunitySupportsInCAREAgreementNotProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "reasonForCalAIMSupportsNotProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "socialServicesAndSupportsProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "socialServicesAndSupportsInCAREAgreement"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "socialServicesAndSupportsInCAREAgreementNotProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "reasonForSocialServicesAndSupportsNotProvided"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "careAgreementDate"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "oneYearStatusHearing"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "outcomeOfOneYearStatusHearing"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "graduationPlan"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "carePlanOrderedDate"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "carePlanCompletionDate"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "terminationOfServicesDate"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "reasonForTermination"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" DROP COLUMN "graduation"`,
        );
        await queryRunner.query(
            `ALTER TABLE "care_data" ADD "veteranStatus" boolean NOT NULL`,
        );
    }
}
