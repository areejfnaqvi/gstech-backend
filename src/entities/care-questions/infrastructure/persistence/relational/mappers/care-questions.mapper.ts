import { CareQuestions } from '../../../../domain/care-questions';
import { CareQuestionsEntity } from '../entities/care-questions.entity';

export class CareQuestionsMapper {
    static toDomain(raw: CareQuestionsEntity): CareQuestions {
        const domainEntity = new CareQuestions();
        domainEntity.description = raw.description;
        domainEntity.questionID = raw.questionID;
        domainEntity.createdAt = raw.createdAt;
        domainEntity.updatedAt = raw.updatedAt;
        domainEntity.id = raw.id;
        domainEntity.type = raw.type;
        domainEntity.options = raw.options;
        domainEntity.constraints = raw.constraints;
        domainEntity.dependentOn = raw.dependentOn;

        return domainEntity;
    }

    static toPersistence(domainEntity: CareQuestions): CareQuestionsEntity {
        const persistenceEntity = new CareQuestionsEntity();
        persistenceEntity.description = domainEntity.description;
        persistenceEntity.questionID = domainEntity.questionID;
        persistenceEntity.createdAt = domainEntity.createdAt;
        persistenceEntity.updatedAt = domainEntity.updatedAt;
        persistenceEntity.id = domainEntity.id;
        persistenceEntity.type = domainEntity.type;
        persistenceEntity.constraints = domainEntity.constraints;
        persistenceEntity.dependentOn = domainEntity.dependentOn;
        if (domainEntity.options) {
            persistenceEntity.options = domainEntity.options;
        }

        return persistenceEntity;
    }
}
