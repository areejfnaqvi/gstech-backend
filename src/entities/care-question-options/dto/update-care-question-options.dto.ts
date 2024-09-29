import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateCareQuestionOptionsDto } from './create-care-question-options.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCareQuestionOptionsDto extends PartialType(
    CreateCareQuestionOptionsDto,
) {
    @ApiPropertyOptional({ type: String })
    @IsString()
    @IsOptional()
    option?: string;

    @ApiPropertyOptional({ type: Number })
    @IsNumber()
    @IsOptional()
    optionID?: number;
}
