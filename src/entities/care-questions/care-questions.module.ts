import { Module } from '@nestjs/common';
import { CareQuestionsService } from './care-questions.service';
import { CareQuestionsController } from './care-questions.controller';
import { RelationalCareQuestionsPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

const infrastructurePersistenceModule =
    RelationalCareQuestionsPersistenceModule;

@Module({
    imports: [infrastructurePersistenceModule],
    controllers: [CareQuestionsController],
    providers: [CareQuestionsService],
    exports: [CareQuestionsService, infrastructurePersistenceModule],
})
export class CareQuestionsModule {}
