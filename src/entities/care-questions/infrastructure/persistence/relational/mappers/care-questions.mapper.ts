import { CareQuestionOptionsMapper } from '../../../../../care-question-options/infrastructure/persistence/relational/mappers/care-question-options.mapper';
import { CareQuestions } from '../../../../domain/care-questions';
import { CareQuestionsEntity } from '../entities/care-questions.entity';

export class CareQuestionsMapper {
    static toDomain(raw: CareQuestionsEntity): CareQuestions {
        const domainEntity = new CareQuestions();
        domainEntity.parentBlock = raw.parentBlock;
        domainEntity.description = raw.description;
        domainEntity.questionID = raw.questionID;
        domainEntity.createdAt = raw.createdAt;
        domainEntity.updatedAt = raw.updatedAt;
        domainEntity.id = raw.id;
        domainEntity.type = raw.type;
        domainEntity.options = raw.options;
        domainEntity.constraints = raw.constraints;
        domainEntity.dependentOn = raw.dependentOn;
        domainEntity.options = raw.options;
        domainEntity.careStatus = raw.careStatus;

        return domainEntity;
    }

    static toPersistence(domainEntity: CareQuestions): CareQuestionsEntity {
        const persistenceEntity = new CareQuestionsEntity();
        persistenceEntity.parentBlock = domainEntity.parentBlock;
        persistenceEntity.description = domainEntity.description;
        persistenceEntity.questionID = domainEntity.questionID;
        persistenceEntity.createdAt = domainEntity.createdAt;
        persistenceEntity.updatedAt = domainEntity.updatedAt;
        persistenceEntity.id = domainEntity.id;
        persistenceEntity.type = domainEntity.type;
        persistenceEntity.constraints = domainEntity.constraints;
        persistenceEntity.dependentOn = domainEntity.dependentOn;
        persistenceEntity.options = domainEntity.options
            ? domainEntity.options.map((option) =>
                  CareQuestionOptionsMapper.toPersistence(option),
              )
            : [];
        persistenceEntity.careStatus = domainEntity.careStatus;

        return persistenceEntity;
    }
}
