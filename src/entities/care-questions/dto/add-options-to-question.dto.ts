import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class AddOptionsToQuestionDto {
    @ApiProperty()
    @IsString()
    questionID: string;

    @ApiProperty({ type: Number })
    @IsArray()
    optionID: number;
}
