import { DeepPartial } from '../../../../utils/types/deep-partial.type';
import { NullableType } from '../../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../../utils/types/pagination-options';
import { CareFormData } from '../../domain/care-form-data';

export abstract class CareFormDataRepository {
    abstract create(
        data: Omit<CareFormData, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<CareFormData>;

    abstract findAllWithPagination({
        paginationOptions,
    }: {
        paginationOptions: IPaginationOptions;
    }): Promise<CareFormData[]>;

    abstract findBySSN(
        ssn: CareFormData['3.3.5'],
    ): Promise<NullableType<CareFormData>>;

    abstract findById(
        id: CareFormData['id'],
    ): Promise<NullableType<CareFormData>>;

    abstract update(
        ssn: CareFormData['3.3.5'],
        payload: DeepPartial<CareFormData>,
    ): Promise<CareFormData | null>;

    abstract remove(ssn: CareFormData['3.3.5']): Promise<void>;
}
