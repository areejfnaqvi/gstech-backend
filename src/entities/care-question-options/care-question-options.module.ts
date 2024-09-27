import { Module } from '@nestjs/common';
import { CareQuestionOptionsService } from './care-question-options.service';
import { CareQuestionOptionsController } from './care-question-options.controller';
import { RelationalCareQuestionOptionsPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

const infrastructurePersistenceModule =
    RelationalCareQuestionOptionsPersistenceModule;

@Module({
    imports: [infrastructurePersistenceModule],
    controllers: [CareQuestionOptionsController],
    providers: [CareQuestionOptionsService],
    exports: [CareQuestionOptionsService, infrastructurePersistenceModule],
})
export class CareQuestionOptionsModule {}
