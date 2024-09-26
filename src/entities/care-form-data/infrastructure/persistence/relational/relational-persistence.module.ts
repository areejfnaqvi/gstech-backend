import { Module } from '@nestjs/common';
import { CareFormDataRepository } from '../care-form-data.repository';
import { CareFormDataRelationalRepository } from './repositories/care-form-data.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CareFormDataEntity } from './entities/care-form-data.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CareFormDataEntity])],
    providers: [
        {
            provide: CareFormDataRepository,
            useClass: CareFormDataRelationalRepository,
        },
    ],
    exports: [CareFormDataRepository],
})
export class RelationalCareFormDataPersistenceModule {}
