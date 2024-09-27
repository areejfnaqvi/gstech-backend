import { ApiProperty } from '@nestjs/swagger';
import { CareQuestions } from '../../care-questions/domain/care-questions';

export class CareQuestionOptions {
    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: String })
    questionID: CareQuestions['questionID'];

    @ApiProperty({ type: String })
    option: string;

    @ApiProperty({ type: Date })
    createdAt: Date;

    @ApiProperty({ type: Date })
    updatedAt: Date;
}
