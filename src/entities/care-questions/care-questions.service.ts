import { Injectable } from '@nestjs/common';
import { CreateCareQuestionsDto } from './dto/create-care-questions.dto';
import { UpdateCareQuestionsDto } from './dto/update-care-questions.dto';
import { CareQuestionsRepository } from './infrastructure/persistence/care-questions.repository';
import { IPaginationOptions } from '../../utils/types/pagination-options';
import { CareQuestions } from './domain/care-questions';

@Injectable()
export class CareQuestionsService {
    constructor(
        private readonly careQuestionsRepository: CareQuestionsRepository,
    ) {}

    create(createCareQuestionsDto: CreateCareQuestionsDto) {
        return this.careQuestionsRepository.create(createCareQuestionsDto);
    }

    findAllWithPagination({
        paginationOptions,
    }: {
        paginationOptions: IPaginationOptions;
    }) {
        return this.careQuestionsRepository.findAllWithPagination({
            paginationOptions: {
                page: paginationOptions.page,
                limit: paginationOptions.limit,
            },
        });
    }

    findByQuestionID(questionID: CareQuestions['questionID']) {
        return this.careQuestionsRepository.findByQuestionID(questionID);
    }

    findByID(id: CareQuestions['id']) {
        return this.careQuestionsRepository.findByID(id);
    }

    findByCareStatus(careStatus: CareQuestions['careStatus']) {
        return this.careQuestionsRepository.findByCareStatus(careStatus);
    }

    update(
        questionID: CareQuestions['questionID'],
        updateCareQuestionsDto: UpdateCareQuestionsDto,
    ) {
        return this.careQuestionsRepository.update(
            questionID,
            updateCareQuestionsDto,
        );
    }

    remove(id: CareQuestions['id']) {
        return this.careQuestionsRepository.remove(id);
    }
}
