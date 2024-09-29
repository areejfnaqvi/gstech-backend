import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CareQuestionsEntity } from '../../care-questions/infrastructure/persistence/relational/entities/care-questions.entity';

export class CareQuestionOptions {
    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: Number })
    optionID: number;

    @ApiProperty({ type: String })
    option: string;

    @ApiPropertyOptional({
        type: () => [CareQuestionsEntity],
        description: 'The list of questions associated with this option',
    })
    questions?: CareQuestionsEntity[];

    @ApiProperty({ type: Date })
    createdAt: Date;

    @ApiProperty({ type: Date })
    updatedAt: Date;
}
