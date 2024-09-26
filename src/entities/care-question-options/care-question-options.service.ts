import { Injectable } from '@nestjs/common';
import { CreateCareQuestionOptionsDto } from './dto/create-care-question-options.dto';
import { UpdateCareQuestionOptionsDto } from './dto/update-care-question-options.dto';
import { CareQuestionOptionsRepository } from './infrastructure/persistence/care-question-options.repository';
import { IPaginationOptions } from '../../utils/types/pagination-options';
import { CareQuestionOptions } from './domain/care-question-options';

@Injectable()
export class CareQuestionOptionsService {
    constructor(
        private readonly careQuestionOptionsRepository: CareQuestionOptionsRepository,
    ) {}

    create(createCareQuestionOptionsDto: CreateCareQuestionOptionsDto) {
        return this.careQuestionOptionsRepository.create(
            createCareQuestionOptionsDto,
        );
    }

    findAllWithPagination({
        paginationOptions,
    }: {
        paginationOptions: IPaginationOptions;
    }) {
        return this.careQuestionOptionsRepository.findAllWithPagination({
            paginationOptions: {
                page: paginationOptions.page,
                limit: paginationOptions.limit,
            },
        });
    }

    findOne(id: CareQuestionOptions['id']) {
        return this.careQuestionOptionsRepository.findById(id);
    }

    findByQuestionID(questionID: CareQuestionOptions['questionID']) {
        return this.careQuestionOptionsRepository.findByQuestionId(questionID);
    }

    update(
        id: CareQuestionOptions['id'],
        updateCareQuestionOptionsDto: UpdateCareQuestionOptionsDto,
    ) {
        return this.careQuestionOptionsRepository.update(
            id,
            updateCareQuestionOptionsDto,
        );
    }

    remove(id: CareQuestionOptions['id']) {
        return this.careQuestionOptionsRepository.remove(id);
    }

    findOptionsByQuestionID(questionID: CareQuestionOptions['questionID']) {
        return this.careQuestionOptionsRepository.findOptionsByQuestionId(questionID);
    }
}
