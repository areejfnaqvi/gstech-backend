import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { QuestionConstraints, QuestionType } from '../domain/care-questions';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCareQuestionsDto {
    @ApiProperty({ type: String, example: 'Current First Name' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ type: String, example: '3.3.2' })
    @IsString()
    @IsNotEmpty()
    questionID: string;

    @ApiProperty({
        type: 'enum',
        enum: QuestionType,
        example: QuestionType.BOOLEAN,
    })
    @IsNotEmpty()
    type: QuestionType;

    @ApiPropertyOptional()
    @IsOptional()
    constraints?: QuestionConstraints;

    @ApiPropertyOptional()
    @IsOptional()
    dependentOn?: string[];
}
