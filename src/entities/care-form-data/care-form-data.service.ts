import { Injectable } from '@nestjs/common';
import { CreateCareFormDataDto } from './dto/create-care-form-data.dto';
import { UpdateCareFormDataDto } from './dto/update-care-form-data.dto';
import { CareFormDataRepository } from './infrastructure/persistence/care-form-data.repository';
import { IPaginationOptions } from '../../utils/types/pagination-options';
import { CareFormData } from './domain/care-form-data';

@Injectable()
export class CareFormDataService {
    constructor(
        private readonly careFormDataRepository: CareFormDataRepository,
    ) {}

    create(createCareFormDataDto: CreateCareFormDataDto) {
        return this.careFormDataRepository.create(createCareFormDataDto);
    }

    findAllWithPagination({
        paginationOptions,
    }: {
        paginationOptions: IPaginationOptions;
    }) {
        return this.careFormDataRepository.findAllWithPagination({
            paginationOptions: {
                page: paginationOptions.page,
                limit: paginationOptions.limit,
            },
        });
    }

    findById(id: CareFormData['id']) {
        return this.careFormDataRepository.findById(id);
    }

    findBySSN(ssn: CareFormData['3.3.5']) {
        return this.careFormDataRepository.findBySSN(ssn);
    }

    update(
        ssn: CareFormData['3.3.5'],
        updateCareFormDataDto: UpdateCareFormDataDto,
    ) {
        return this.careFormDataRepository.update(ssn, updateCareFormDataDto);
    }

    remove(ssn: CareFormData['3.3.5']) {
        return this.careFormDataRepository.remove(ssn);
    }
}
