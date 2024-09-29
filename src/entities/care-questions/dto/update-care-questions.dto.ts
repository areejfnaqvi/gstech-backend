import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateCareQuestionsDto } from './create-care-questions.dto';
import { IsOptional } from 'class-validator';
import { QuestionConstraints, QuestionType } from '../domain/care-questions';
import { CareQuestionOptionsEntity } from '../../care-question-options/infrastructure/persistence/relational/entities/care-question-options.entity';

export class UpdateCareQuestionsDto extends PartialType(
    CreateCareQuestionsDto,
) {
    @ApiPropertyOptional({ type: String })
    @IsOptional()
    questionID?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    description?: string;

    @ApiPropertyOptional({
        type: 'enum',
        enum: QuestionType,
        example: QuestionType.BOOLEAN,
    })
    @IsOptional()
    type?: QuestionType;

    @ApiPropertyOptional()
    @IsOptional()
    parentBlock?: string;

    @ApiPropertyOptional()
    @IsOptional()
    constraints?: QuestionConstraints;

    @ApiPropertyOptional()
    @IsOptional()
    options?: CareQuestionOptionsEntity[];

    @ApiPropertyOptional()
    @IsOptional()
    dependentOn?: 'jsonb';

    @ApiPropertyOptional()
    @IsOptional()
    careStatus?: string;
}
