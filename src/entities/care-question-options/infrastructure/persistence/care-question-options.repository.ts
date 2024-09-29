import { DeepPartial } from '../../../../utils/types/deep-partial.type';
import { NullableType } from '../../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../../utils/types/pagination-options';
import { CareQuestionOptions } from '../../domain/care-question-options';

export abstract class CareQuestionOptionsRepository {
    abstract create(
        data: Omit<CareQuestionOptions, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<CareQuestionOptions>;

    abstract findAllWithPagination({
        paginationOptions,
    }: {
        paginationOptions: IPaginationOptions;
    }): Promise<CareQuestionOptions[]>;

    abstract findById(
        id: CareQuestionOptions['id'],
    ): Promise<NullableType<CareQuestionOptions>>;

    abstract findByOptionID(
        optionID: CareQuestionOptions['optionID'],
    ): Promise<NullableType<CareQuestionOptions[]>>;

    abstract update(
        id: CareQuestionOptions['id'],
        payload: DeepPartial<CareQuestionOptions>,
    ): Promise<CareQuestionOptions | null>;

    abstract remove(id: CareQuestionOptions['id']): Promise<void>;
}
