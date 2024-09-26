import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CareFormDataEntity } from '../entities/care-form-data.entity';
import { NullableType } from '../../../../../../utils/types/nullable.type';
import { CareFormData } from '../../../../domain/care-form-data';
import { CareFormDataRepository } from '../../care-form-data.repository';
import { CareFormDataMapper } from '../mappers/care-form-data.mapper';
import { IPaginationOptions } from '../../../../../../utils/types/pagination-options';

@Injectable()
export class CareFormDataRelationalRepository
    implements CareFormDataRepository
{
    constructor(
        @InjectRepository(CareFormDataEntity)
        private readonly careFormDataRepository: Repository<CareFormDataEntity>,
    ) {}

    async create(data: CareFormData): Promise<CareFormData> {
        const persistenceModel = CareFormDataMapper.toPersistence(data);
        const newEntity = await this.careFormDataRepository.save(
            this.careFormDataRepository.create(persistenceModel),
        );
        return CareFormDataMapper.toDomain(newEntity);
    }

    async findAllWithPagination({
        paginationOptions,
    }: {
        paginationOptions: IPaginationOptions;
    }): Promise<CareFormData[]> {
        const entities = await this.careFormDataRepository.find({
            skip: (paginationOptions.page - 1) * paginationOptions.limit,
            take: paginationOptions.limit,
        });

        return entities.map((user) => CareFormDataMapper.toDomain(user));
    }

    async findBySSN(
        ssn: CareFormData['3.3.5'],
    ): Promise<NullableType<CareFormData>> {
        const entity = await this.careFormDataRepository.findOne({
            where: { '3.3.5': ssn },
        });

        return entity ? CareFormDataMapper.toDomain(entity) : null;
    }

    async findById(
        id: CareFormData['id'],
    ): Promise<NullableType<CareFormData>> {
        const entity = await this.careFormDataRepository.findOne({
            where: { id },
        });

        return entity ? CareFormDataMapper.toDomain(entity) : null;
    }

    async update(
        ssn: CareFormData['3.3.5'],
        payload: Partial<CareFormData>,
    ): Promise<CareFormData> {
        const entity = await this.careFormDataRepository.findOne({
            where: { '3.3.5': ssn },
        });

        if (!entity) {
            throw new Error('Record not found');
        }

        const updatedEntity = await this.careFormDataRepository.save(
            this.careFormDataRepository.create(
                CareFormDataMapper.toPersistence({
                    ...CareFormDataMapper.toDomain(entity),
                    ...payload,
                }),
            ),
        );

        return CareFormDataMapper.toDomain(updatedEntity);
    }

    async remove(ssn: CareFormData['3.3.5']): Promise<void> {
        await this.careFormDataRepository.delete(ssn);
    }
}
