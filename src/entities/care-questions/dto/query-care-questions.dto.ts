import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryAllCareQuestions {
    @ApiPropertyOptional()
    @Transform(({ value }) => (value ? Number(value) : 1))
    @IsNumber()
    @IsOptional()
    page?: number;

    @ApiPropertyOptional()
    @Transform(({ value }) => (value ? Number(value) : 10))
    @IsNumber()
    @IsOptional()
    limit?: number;
}

export class QueryCareQuestion {
    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    questionID?: string;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    id?: number;
}
