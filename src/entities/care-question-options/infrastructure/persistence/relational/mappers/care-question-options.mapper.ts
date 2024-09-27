import { CareQuestionsEntity } from '../../../../../care-questions/infrastructure/persistence/relational/entities/care-questions.entity';
import { CareQuestionOptions } from '../../../../domain/care-question-options';
import { CareQuestionOptionsEntity } from '../entities/care-question-options.entity';

export class CareQuestionOptionsMapper {
    static toDomain(raw: CareQuestionOptionsEntity): CareQuestionOptions {
        const domainEntity = new CareQuestionOptions();
        domainEntity.option = raw.option;
        domainEntity.questionID = raw.question.questionID;
        domainEntity.id = raw.id;
        domainEntity.createdAt = raw.createdAt;
        domainEntity.updatedAt = raw.updatedAt;

        return domainEntity;
    }

    static toPersistence(
        domainEntity: CareQuestionOptions,
    ): CareQuestionOptionsEntity {
        const persistenceEntity = new CareQuestionOptionsEntity();
        persistenceEntity.option = domainEntity.option;
        const questionEntity = new CareQuestionsEntity();
        questionEntity.questionID = domainEntity.questionID;
        persistenceEntity.question = questionEntity;
        if (domainEntity.id) {
            persistenceEntity.id = domainEntity.id;
        }
        persistenceEntity.createdAt = domainEntity.createdAt;
        persistenceEntity.updatedAt = domainEntity.updatedAt;

        return persistenceEntity;
    }
}
