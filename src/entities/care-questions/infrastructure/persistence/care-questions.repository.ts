import { DeepPartial } from '../../../../utils/types/deep-partial.type';
import { NullableType } from '../../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../../utils/types/pagination-options';
import { CareQuestions } from '../../domain/care-questions';

export abstract class CareQuestionsRepository {
    abstract create(
        data: Omit<CareQuestions, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<CareQuestions>;

    abstract findAllWithPagination({
        paginationOptions,
    }: {
        paginationOptions: IPaginationOptions;
    }): Promise<CareQuestions[]>;

    abstract findByQuestionID(
        questionID: CareQuestions['questionID'],
    ): Promise<NullableType<CareQuestions>>;

    abstract findByID(
        id: CareQuestions['id'],
    ): Promise<NullableType<CareQuestions>>;

    abstract findByCareStatus(
        careStatus: CareQuestions['careStatus'],
    ): Promise<NullableType<CareQuestions[]>>;

    abstract update(
        questionID: CareQuestions['questionID'],
        payload: DeepPartial<CareQuestions>,
    ): Promise<CareQuestions | null>;

    abstract remove(questionID: CareQuestions['id']): Promise<void>;
}
