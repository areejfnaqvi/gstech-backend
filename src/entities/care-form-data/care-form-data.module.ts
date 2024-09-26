import { Module } from '@nestjs/common';
import { CareFormDataService } from './care-form-data.service';
import { CareFormDataController } from './care-form-data.controller';
import { RelationalCareFormDataPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

const infrastructurePersistenceModule = RelationalCareFormDataPersistenceModule;

@Module({
    imports: [infrastructurePersistenceModule],
    controllers: [CareFormDataController],
    providers: [CareFormDataService],
    exports: [CareFormDataService, infrastructurePersistenceModule],
})
export class CareFormDataModule {}
