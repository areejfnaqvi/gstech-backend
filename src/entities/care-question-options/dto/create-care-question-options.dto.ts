import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

import {
    ApiProperty,
} from '@nestjs/swagger';
import { CareQuestions } from '../../care-questions/domain/care-questions';

export class CreateCareQuestionOptionsDto {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    option: string;

    @ApiProperty({ type: CareQuestions['questionID'] })
    @IsString()
    @IsNotEmpty()
    questionID: string;
}
