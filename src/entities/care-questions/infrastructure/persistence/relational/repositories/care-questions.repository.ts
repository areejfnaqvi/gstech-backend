import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CareQuestionsEntity } from '../entities/care-questions.entity';
import { NullableType } from '../../../../../../utils/types/nullable.type';
import { CareQuestions } from '../../../../domain/care-questions';
import { CareQuestionsRepository } from '../../care-questions.repository';
import { CareQuestionsMapper } from '../mappers/care-questions.mapper';
import { IPaginationOptions } from '../../../../../../utils/types/pagination-options';

@Injectable()
export class CareQuestionsRelationalRepository
    implements CareQuestionsRepository
{
    constructor(
        @InjectRepository(CareQuestionsEntity)
        private readonly careQuestionsRepository: Repository<CareQuestionsEntity>,
    ) {}

    async create(data: CareQuestions): Promise<CareQuestions> {
        const persistenceModel = CareQuestionsMapper.toPersistence(data);
        const newEntity = await this.careQuestionsRepository.save(
            this.careQuestionsRepository.create(persistenceModel),
        );
        return CareQuestionsMapper.toDomain(newEntity);
    }

    async findAllWithPagination({
        paginationOptions,
    }: {
        paginationOptions: IPaginationOptions;
    }): Promise<CareQuestions[]> {
        const entities = await this.careQuestionsRepository.find({
            skip: (paginationOptions.page - 1) * paginationOptions.limit,
            take: paginationOptions.limit,
            relations: ['options']
        });

        return entities.map((user) => CareQuestionsMapper.toDomain(user));
    }

    async findByQuestionID(
        questionID: CareQuestions['questionID'],
    ): Promise<NullableType<CareQuestions>> {
        const entity = await this.careQuestionsRepository.findOne({
            where: { questionID },
            relations: ['options']
        });

        return entity ? CareQuestionsMapper.toDomain(entity) : null;
    }

    async findByCareStatus(
        careStatus: CareQuestions['careStatus'],
    ): Promise<NullableType<CareQuestions[]>> {
        return await this.careQuestionsRepository.find({
            where: { careStatus },
            relations: ['options']
        });
    }

    async findByID(
        id: CareQuestions['id'],
    ): Promise<NullableType<CareQuestions>> {
        const entity = await this.careQuestionsRepository.findOne({
            where: { id },
            relations: ['options']
        });

        return entity ? CareQuestionsMapper.toDomain(entity) : null;
    }

    async update(
        questionID: CareQuestions['questionID'],
        payload: Partial<CareQuestions>,
    ): Promise<CareQuestions> {
        const entity = await this.careQuestionsRepository.findOne({
            where: { questionID },
        });

        if (!entity) {
            throw new Error('Record not found');
        }

        const updatedEntity = await this.careQuestionsRepository.save(
            this.careQuestionsRepository.create(
                CareQuestionsMapper.toPersistence({
                    ...CareQuestionsMapper.toDomain(entity),
                    ...payload,
                }),
            ),
        );

        return CareQuestionsMapper.toDomain(updatedEntity);
    }

    async remove(id: CareQuestions['id']): Promise<void> {
        await this.careQuestionsRepository.delete(id);
    }
}
