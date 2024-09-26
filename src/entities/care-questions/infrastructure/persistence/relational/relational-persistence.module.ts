import { Module } from '@nestjs/common';
import { CareQuestionsRepository } from '../care-questions.repository';
import { CareQuestionsRelationalRepository } from './repositories/care-questions.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CareQuestionsEntity } from './entities/care-questions.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CareQuestionsEntity])],
    providers: [
        {
            provide: CareQuestionsRepository,
            useClass: CareQuestionsRelationalRepository,
        },
    ],
    exports: [CareQuestionsRepository],
})
export class RelationalCareQuestionsPersistenceModule {}
