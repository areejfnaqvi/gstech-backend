import { CareFormData } from '../../../../domain/care-form-data';
import { CareFormDataEntity } from '../entities/care-form-data.entity';

export class CareFormDataMapper {
    static toDomain(raw: CareFormDataEntity): CareFormData {
        const domainEntity = new CareFormData();
        domainEntity.id = raw.id;
        domainEntity.submittedByEmail = raw.submittedByEmail;
        domainEntity.submittedByName = raw.submittedByName;

        domainEntity['3.3.1'] = raw['3.3.1'];
        domainEntity['3.3.2'] = raw['3.3.2'];
        domainEntity['3.3.3'] = raw['3.3.3'];
        domainEntity['3.3.4'] = raw['3.3.4'];
        domainEntity['3.3.5'] = raw['3.3.5'];
        domainEntity['3.3.6'] = raw['3.3.6'];
        domainEntity['3.3.7'] = raw['3.3.7'];
        domainEntity['3.3.8'] = raw['3.3.8'];
        domainEntity['3.3.9'] = raw['3.3.9'];
        domainEntity['3.3.10'] = raw['3.3.10'];
        domainEntity['3.3.11'] = raw['3.3.11'];
        domainEntity['3.3.12'] = raw['3.3.12'];
        domainEntity['3.3.13'] = raw['3.3.13'];
        domainEntity['3.3.14'] = raw['3.3.14'];

        domainEntity['3.4.1'] = raw['3.4.1'];
        domainEntity['3.4.2'] = raw['3.4.2'];
        domainEntity['3.4.3'] = raw['3.4.3'];
        domainEntity['3.4.4'] = raw['3.4.4'];
        domainEntity['3.4.5'] = raw['3.4.5'];
        domainEntity['3.4.6'] = raw['3.4.6'];
        domainEntity['3.4.7'] = raw['3.4.7'];
        domainEntity['3.4.8'] = raw['3.4.8'];
        domainEntity['3.4.9'] = raw['3.4.9'];
        domainEntity['3.4.10'] = raw['3.4.10'];
        domainEntity['3.4.11'] = raw['3.4.11'];
        domainEntity['3.4.12'] = raw['3.4.12'];
        domainEntity['3.4.13'] = raw['3.4.13'];
        domainEntity['3.4.14'] = raw['3.4.14'];

        domainEntity['3.5.1'] = raw['3.5.1'];
        domainEntity['3.5.2'] = raw['3.5.2'];
        domainEntity['3.5.3'] = raw['3.5.3'];
        domainEntity['3.5.4'] = raw['3.5.4'];
        domainEntity['3.5.5'] = raw['3.5.5'];
        domainEntity['3.5.6'] = raw['3.5.6'];
        domainEntity['3.5.7'] = raw['3.5.7'];
        domainEntity['3.5.8'] = raw['3.5.8'];
        domainEntity['3.5.9'] = raw['3.5.9'];
        domainEntity['3.5.10'] = raw['3.5.10'];
        domainEntity['3.5.11'] = raw['3.5.11'];
        domainEntity['3.5.12'] = raw['3.5.12'];
        domainEntity['3.5.13'] = raw['3.5.13'];
        domainEntity['3.5.14'] = raw['3.5.14'];
        domainEntity['3.5.15'] = raw['3.5.15'];
        domainEntity['3.5.16'] = raw['3.5.16'];
        domainEntity['3.5.17'] = raw['3.5.17'];
        domainEntity['3.5.18'] = raw['3.5.18'];
        domainEntity['3.5.19'] = raw['3.5.19'];
        domainEntity['3.5.20'] = raw['3.5.20'];
        domainEntity['3.5.21'] = raw['3.5.21'];
        domainEntity['3.5.22'] = raw['3.5.22'];
        domainEntity['3.5.23'] = raw['3.5.23'];

        domainEntity['3.6.1'] = raw['3.6.1'];
        domainEntity['3.6.2'] = raw['3.6.2'];

        domainEntity['3.7.1'] = raw['3.7.1'];
        domainEntity['3.7.2'] = raw['3.7.2'];
        domainEntity['3.7.3'] = raw['3.7.3'];
        domainEntity['3.7.4'] = raw['3.7.4'];
        domainEntity['3.7.5'] = raw['3.7.5'];
        domainEntity['3.7.6'] = raw['3.7.6'];
        domainEntity['3.7.7'] = raw['3.7.7'];

        domainEntity['3.8.1'] = raw['3.8.1'];
        domainEntity['3.8.2'] = raw['3.8.2'];

        domainEntity['3.9.1'] = raw['3.9.1'];
        domainEntity['3.9.2'] = raw['3.9.2'];
        domainEntity['3.9.3'] = raw['3.9.3'];
        domainEntity['3.9.4'] = raw['3.9.4'];
        domainEntity['3.9.5'] = raw['3.9.5'];

        domainEntity['3.10.1'] = raw['3.10.1'];
        domainEntity['3.10.2'] = raw['3.10.2'];
        domainEntity['3.10.3'] = raw['3.10.3'];

        domainEntity['3.11.1'] = raw['3.11.1'];
        domainEntity['3.11.2'] = raw['3.11.2'];
        domainEntity['3.11.3'] = raw['3.11.3'];
        domainEntity['3.11.4'] = raw['3.11.4'];
        domainEntity['3.11.5'] = raw['3.11.5'];
        domainEntity['3.11.6'] = raw['3.11.6'];

        domainEntity['3.12.1'] = raw['3.12.1'];
        domainEntity['3.12.2'] = raw['3.12.2'];
        domainEntity['3.12.3'] = raw['3.12.3'];
        domainEntity['3.12.4'] = raw['3.12.4'];
        domainEntity['3.12.5'] = raw['3.12.5'];
        domainEntity['3.12.6'] = raw['3.12.6'];

        domainEntity['3.13.1'] = raw['3.13.1'];
        domainEntity['3.13.2'] = raw['3.13.2'];

        domainEntity.createdAt = raw.createdAt;
        domainEntity.updatedAt = raw.updatedAt;

        return domainEntity;
    }

    static toPersistence(domainEntity: CareFormData): CareFormDataEntity {
        const persistenceEntity = new CareFormDataEntity();
        if (domainEntity.id) {
            persistenceEntity.id = domainEntity.id;
        }
        persistenceEntity.submittedByEmail = domainEntity.submittedByEmail;
        persistenceEntity.submittedByName = domainEntity.submittedByName;

        persistenceEntity['3.3.1'] = domainEntity['3.3.1'];
        persistenceEntity['3.3.2'] = domainEntity['3.3.2'];
        persistenceEntity['3.3.3'] = domainEntity['3.3.3'];
        persistenceEntity['3.3.4'] = domainEntity['3.3.4'];
        persistenceEntity['3.3.5'] = domainEntity['3.3.5'];
        persistenceEntity['3.3.6'] = domainEntity['3.3.6'];
        persistenceEntity['3.3.7'] = domainEntity['3.3.7'];
        persistenceEntity['3.3.8'] = domainEntity['3.3.8'];
        persistenceEntity['3.3.9'] = domainEntity['3.3.9'];
        persistenceEntity['3.3.10'] = domainEntity['3.3.10'];
        persistenceEntity['3.3.11'] = domainEntity['3.3.11'];
        persistenceEntity['3.3.12'] = domainEntity['3.3.12'];
        persistenceEntity['3.3.13'] = domainEntity['3.3.13'];
        persistenceEntity['3.3.14'] = domainEntity['3.3.14'];

        persistenceEntity['3.4.1'] = domainEntity['3.4.1'];
        persistenceEntity['3.4.2'] = domainEntity['3.4.2'];
        persistenceEntity['3.4.3'] = domainEntity['3.4.3'];
        persistenceEntity['3.4.4'] = domainEntity['3.4.4'];
        persistenceEntity['3.4.5'] = domainEntity['3.4.5'];
        persistenceEntity['3.4.6'] = domainEntity['3.4.6'];
        persistenceEntity['3.4.7'] = domainEntity['3.4.7'];
        persistenceEntity['3.4.8'] = domainEntity['3.4.8'];
        persistenceEntity['3.4.9'] = domainEntity['3.4.9'];
        persistenceEntity['3.4.10'] = domainEntity['3.4.10'];
        persistenceEntity['3.4.11'] = domainEntity['3.4.11'];
        persistenceEntity['3.4.12'] = domainEntity['3.4.12'];
        persistenceEntity['3.4.13'] = domainEntity['3.4.13'];
        persistenceEntity['3.4.14'] = domainEntity['3.4.14'];

        persistenceEntity['3.5.1'] = domainEntity['3.5.1'];
        persistenceEntity['3.5.2'] = domainEntity['3.5.2'];
        persistenceEntity['3.5.3'] = domainEntity['3.5.3'];
        persistenceEntity['3.5.4'] = domainEntity['3.5.4'];
        persistenceEntity['3.5.5'] = domainEntity['3.5.5'];
        persistenceEntity['3.5.6'] = domainEntity['3.5.6'];
        persistenceEntity['3.5.7'] = domainEntity['3.5.7'];
        persistenceEntity['3.5.8'] = domainEntity['3.5.8'];
        persistenceEntity['3.5.9'] = domainEntity['3.5.9'];
        persistenceEntity['3.5.10'] = domainEntity['3.5.10'];
        persistenceEntity['3.5.11'] = domainEntity['3.5.11'];
        persistenceEntity['3.5.12'] = domainEntity['3.5.12'];
        persistenceEntity['3.5.13'] = domainEntity['3.5.13'];
        persistenceEntity['3.5.14'] = domainEntity['3.5.14'];
        persistenceEntity['3.5.15'] = domainEntity['3.5.15'];
        persistenceEntity['3.5.16'] = domainEntity['3.5.16'];
        persistenceEntity['3.5.17'] = domainEntity['3.5.17'];
        persistenceEntity['3.5.18'] = domainEntity['3.5.18'];
        persistenceEntity['3.5.19'] = domainEntity['3.5.19'];
        persistenceEntity['3.5.20'] = domainEntity['3.5.20'];
        persistenceEntity['3.5.21'] = domainEntity['3.5.21'];
        persistenceEntity['3.5.22'] = domainEntity['3.5.22'];
        persistenceEntity['3.5.23'] = domainEntity['3.5.23'];

        persistenceEntity['3.6.1'] = domainEntity['3.6.1'];
        persistenceEntity['3.6.2'] = domainEntity['3.6.2'];

        persistenceEntity['3.7.1'] = domainEntity['3.7.1'];
        persistenceEntity['3.7.2'] = domainEntity['3.7.2'];
        persistenceEntity['3.7.3'] = domainEntity['3.7.3'];
        persistenceEntity['3.7.4'] = domainEntity['3.7.4'];
        persistenceEntity['3.7.5'] = domainEntity['3.7.5'];
        persistenceEntity['3.7.6'] = domainEntity['3.7.6'];
        persistenceEntity['3.7.7'] = domainEntity['3.7.7'];

        persistenceEntity['3.8.1'] = domainEntity['3.8.1'];
        persistenceEntity['3.8.2'] = domainEntity['3.8.2'];

        persistenceEntity['3.9.1'] = domainEntity['3.9.1'];
        persistenceEntity['3.9.2'] = domainEntity['3.9.2'];
        persistenceEntity['3.9.3'] = domainEntity['3.9.3'];
        persistenceEntity['3.9.4'] = domainEntity['3.9.4'];
        persistenceEntity['3.9.5'] = domainEntity['3.9.5'];

        persistenceEntity['3.10.1'] = domainEntity['3.10.1'];
        persistenceEntity['3.10.2'] = domainEntity['3.10.2'];
        persistenceEntity['3.10.3'] = domainEntity['3.10.3'];

        persistenceEntity['3.11.1'] = domainEntity['3.11.1'];
        persistenceEntity['3.11.2'] = domainEntity['3.11.2'];
        persistenceEntity['3.11.3'] = domainEntity['3.11.3'];
        persistenceEntity['3.11.4'] = domainEntity['3.11.4'];
        persistenceEntity['3.11.5'] = domainEntity['3.11.5'];
        persistenceEntity['3.11.6'] = domainEntity['3.11.6'];

        persistenceEntity['3.12.1'] = domainEntity['3.12.1'];
        persistenceEntity['3.12.2'] = domainEntity['3.12.2'];
        persistenceEntity['3.12.3'] = domainEntity['3.12.3'];
        persistenceEntity['3.12.4'] = domainEntity['3.12.4'];
        persistenceEntity['3.12.5'] = domainEntity['3.12.5'];
        persistenceEntity['3.12.6'] = domainEntity['3.12.6'];

        persistenceEntity['3.13.1'] = domainEntity['3.13.1'];
        persistenceEntity['3.13.2'] = domainEntity['3.13.2'];

        persistenceEntity.createdAt = domainEntity.createdAt;
        persistenceEntity.updatedAt = domainEntity.updatedAt;

        return persistenceEntity;
    }
}
