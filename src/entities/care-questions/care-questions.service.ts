import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCareQuestionsDto } from './dto/create-care-questions.dto';
import { UpdateCareQuestionsDto } from './dto/update-care-questions.dto';
import { CareQuestionsRepository } from './infrastructure/persistence/care-questions.repository';
import { IPaginationOptions } from '../../utils/types/pagination-options';
import { CareQuestions } from './domain/care-questions';
import { AddOptionsToQuestionDto } from './dto/add-options-to-question.dto';
import { CareQuestionOptionsService } from '../care-question-options/care-question-options.service';

@Injectable()
export class CareQuestionsService {
    constructor(
        // @Inject(CareQuestionOptionsService)
        private readonly careQuestionsRepository: CareQuestionsRepository, private readonly careQuestionOptionsService: CareQuestionOptionsService
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

    async addOptionsToQuestion(addOptionsDto: AddOptionsToQuestionDto) {
        const { questionID, optionID } = addOptionsDto;

        const question = await this.findByQuestionID(questionID);
    
        if (!question) {
            throw new Error('Question not found');
        }
        const newOptions = await this.careQuestionOptionsService.findByOptionID(optionID[0]);
    
        question.options = newOptions ? [...newOptions] : [];

        await this.careQuestionsRepository.update(questionID, {
            options: question.options,
        });
    
        return this.findByQuestionID(questionID);
    }
    
}
