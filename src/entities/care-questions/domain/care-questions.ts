import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CareQuestionOptionsEntity } from '../../care-question-options/infrastructure/persistence/relational/entities/care-question-options.entity';

export enum QuestionType {
    TEXT = 'text',
    NUMBER = 'number',
    BOOLEAN = 'boolean',
    SELECT_SINGLE = 'select_single',
    SELECT_MULTIPLE = 'select_multiple',
    DATE = 'Date',
}

export type QuestionConstraints = {
    minLength?: number;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
};

export class CareQuestions {
    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: String })
    questionID: string;

    @ApiProperty({ type: String })
    description: string;

    @ApiProperty({
        description: 'The type of the question',
        enum: QuestionType,
        example: QuestionType.SELECT_SINGLE,
    })
    type: QuestionType;

    @ApiPropertyOptional({
        description: 'Constraints for text or number input',
        example: { minLength: 1, maxLength: 255, minValue: 0, maxValue: 100 },
        nullable: true,
    })
    constraints?: QuestionConstraints;

    @ApiPropertyOptional({
        type: String,
        description: 'The block that this question belongs to',
        nullable: true
    })
    parentBlock?: string;

    @ApiPropertyOptional({
        type: () => CareQuestionOptionsEntity,
        isArray: true,
        nullable: true,
    })
    options?: CareQuestionOptionsEntity[] | null;

    @ApiPropertyOptional({
        type: () => [String],
        isArray: true,
        description:
            'Lists the previously answered questions that this question is dependent on, if any.',
        nullable: true,
    })
    dependentOn?: string[];

    @ApiProperty({ type: Date })
    createdAt: Date;

    @ApiProperty({ type: Date })
    updatedAt: Date;
}
