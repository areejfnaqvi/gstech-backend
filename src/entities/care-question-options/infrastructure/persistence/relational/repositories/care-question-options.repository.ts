import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CareQuestionOptionsEntity } from '../entities/care-question-options.entity';
import { NullableType } from '../../../../../../utils/types/nullable.type';
import { CareQuestionOptions } from '../../../../domain/care-question-options';
import { CareQuestionOptionsRepository } from '../../care-question-options.repository';
import { CareQuestionOptionsMapper } from '../mappers/care-question-options.mapper';
import { IPaginationOptions } from '../../../../../../utils/types/pagination-options';

@Injectable()
export class CareQuestionOptionsRelationalRepository
    implements CareQuestionOptionsRepository
{
    constructor(
        @InjectRepository(CareQuestionOptionsEntity)
        private readonly careQuestionOptionsRepository: Repository<CareQuestionOptionsEntity>,
    ) {}

    async create(data: CareQuestionOptions): Promise<CareQuestionOptions> {
        const persistenceModel = CareQuestionOptionsMapper.toPersistence(data);
        const newEntity = await this.careQuestionOptionsRepository.save(
            this.careQuestionOptionsRepository.create(persistenceModel),
        );
        return CareQuestionOptionsMapper.toDomain(newEntity);
    }

    async findAllWithPagination({
        paginationOptions,
    }: {
        paginationOptions: IPaginationOptions;
    }): Promise<CareQuestionOptions[]> {
        const entities = await this.careQuestionOptionsRepository.find({
            skip: (paginationOptions.page - 1) * paginationOptions.limit,
            take: paginationOptions.limit,
        });

        return entities.map((user) => CareQuestionOptionsMapper.toDomain(user));
    }

    async findById(
        id: CareQuestionOptions['id'],
    ): Promise<NullableType<CareQuestionOptions>> {
        const entity = await this.careQuestionOptionsRepository.findOne({
            where: { id },
        });

        return entity ? CareQuestionOptionsMapper.toDomain(entity) : null;
    }

    async findByOptionID(
        optionID: CareQuestionOptions['optionID'],
    ): Promise<NullableType<CareQuestionOptions>> {
        const entity = await this.careQuestionOptionsRepository.findOne({
            where: { optionID },
        });

        return entity ? CareQuestionOptionsMapper.toDomain(entity) : null;
    }

    async update(
        id: CareQuestionOptions['id'],
        payload: Partial<CareQuestionOptions>,
    ): Promise<CareQuestionOptions> {
        const entity = await this.careQuestionOptionsRepository.findOne({
            where: { id },
        });

        if (!entity) {
            throw new Error('Record not found');
        }

        const updatedEntity = await this.careQuestionOptionsRepository.save(
            this.careQuestionOptionsRepository.create(
                CareQuestionOptionsMapper.toPersistence({
                    ...CareQuestionOptionsMapper.toDomain(entity),
                    ...payload,
                }),
            ),
        );

        return CareQuestionOptionsMapper.toDomain(updatedEntity);
    }

    async remove(id: CareQuestionOptions['id']): Promise<void> {
        await this.careQuestionOptionsRepository.delete(id);
    }
}
