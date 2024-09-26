import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateCareQuestionOptionsDto } from './create-care-question-options.dto';
import { IsOptional, IsString } from 'class-validator';
import { CareQuestions } from '../../care-questions/domain/care-questions';

export class UpdateCareQuestionOptionsDto extends PartialType(
    CreateCareQuestionOptionsDto,
) {
    @ApiPropertyOptional({ type: String })
    @IsString()
    @IsOptional()
    option?: string;

    @ApiPropertyOptional({ type: CareQuestions['questionID'] })
    @IsString()
    @IsOptional()
    questionID?: string;
}
