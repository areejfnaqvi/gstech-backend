import { Module } from '@nestjs/common';
import { CareQuestionsService } from './care-questions.service';
import { CareQuestionsController } from './care-questions.controller';
import { RelationalCareQuestionsPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';
import { CareQuestionOptionsModule } from '../care-question-options/care-question-options.module';
import { CareQuestionOptionsService } from '../care-question-options/care-question-options.service';

const infrastructurePersistenceModule =
    RelationalCareQuestionsPersistenceModule;

@Module({
    imports: [infrastructurePersistenceModule, CareQuestionOptionsModule],
    controllers: [CareQuestionsController],
    providers: [CareQuestionsService],
    exports: [CareQuestionsService, infrastructurePersistenceModule],
})
export class CareQuestionsModule {}
