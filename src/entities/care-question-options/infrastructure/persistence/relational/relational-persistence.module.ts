import { Module } from '@nestjs/common';
import { CareQuestionOptionsRepository } from '../care-question-options.repository';
import { CareQuestionOptionsRelationalRepository } from './repositories/care-question-options.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CareQuestionOptionsEntity } from './entities/care-question-options.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CareQuestionOptionsEntity])],
    providers: [
        {
            provide: CareQuestionOptionsRepository,
            useClass: CareQuestionOptionsRelationalRepository,
        },
    ],
    exports: [CareQuestionOptionsRepository],
})
export class RelationalCareQuestionOptionsPersistenceModule {}
