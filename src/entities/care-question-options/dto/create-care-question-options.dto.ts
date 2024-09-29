import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCareQuestionOptionsDto {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    option: string;

    @ApiProperty({ type: Number })
    @IsNumber()
    @IsNotEmpty()
    optionID: number;
}
