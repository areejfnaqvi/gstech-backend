import { CareQuestionsEntity } from '../../../../../care-questions/infrastructure/persistence/relational/entities/care-questions.entity';
import { CareQuestionOptions } from '../../../../domain/care-question-options';
import { CareQuestionOptionsEntity } from '../entities/care-question-options.entity';

export class CareQuestionOptionsMapper {
    static toDomain(raw: CareQuestionOptionsEntity): CareQuestionOptions {
        const domainEntity = new CareQuestionOptions();
        domainEntity.option = raw.option;
        domainEntity.id = raw.id;
        domainEntity.createdAt = raw.createdAt;
        domainEntity.updatedAt = raw.updatedAt;
        domainEntity.questions = raw.questions;

        return domainEntity;
    }

    static toPersistence(
        domainEntity: CareQuestionOptions,
    ): CareQuestionOptionsEntity {
        const persistenceEntity = new CareQuestionOptionsEntity();
        persistenceEntity.option = domainEntity.option;
        if (domainEntity.id) {
            persistenceEntity.id = domainEntity.id;
        }
        persistenceEntity.createdAt = domainEntity.createdAt;
        persistenceEntity.updatedAt = domainEntity.updatedAt;
        persistenceEntity.questions = domainEntity.questions ? domainEntity.questions : [];

        return persistenceEntity;
    }
}
