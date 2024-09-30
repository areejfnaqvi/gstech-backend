import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateCareFormDataDto } from './create-care-form-data.dto';
import {
    IsBoolean,
    IsDate,
    IsEmail,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';

export class UpdateCareFormDataDto extends PartialType(CreateCareFormDataDto) {
    [key: string]: any;

    @ApiPropertyOptional({ type: String, example: 'john.doe@example.com' })
    @IsOptional()
    @IsEmail()
    submittedByEmail?: string;

    @ApiPropertyOptional({ type: String, example: 'John' })
    @IsOptional()
    @IsString()
    submittedByName?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.3.1'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.3.2'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.3.3'?: string;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    '3.3.4'?: number;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    '3.3.6'?: number;

    @ApiPropertyOptional({ type: Date })
    @IsOptional()
    @IsDate()
    '3.3.7'?: Date;

    @ApiPropertyOptional({ type: Date })
    @IsOptional()
    @IsDate()
    '3.3.8'?: Date;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.3.9'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.4.1'?: string;

    @ApiPropertyOptional()
    @IsOptional()
    '3.4.2'?: any[];

    @ApiPropertyOptional()
    @IsOptional()
    '3.4.3'?: any[];

    @ApiPropertyOptional()
    @IsOptional()
    '3.4.6'?: any[];

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.4.7'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.4.8'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.4.9'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.4.10'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.4.11'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.4.12'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.4.13'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.4.14'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.4.4'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.4.5'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.3.10'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.6.1'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.6.2'?: string;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    '3.8.1'?: number;

    @ApiPropertyOptional({ type: Boolean })
    @IsOptional()
    @IsBoolean()
    '3.8.2'?: boolean;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.9.1'?: string;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    '3.9.2'?: number;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    '3.9.3'?: number;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    '3.9.4'?: number;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    '3.9.5'?: number;

    @ApiPropertyOptional({ type: Boolean })
    @IsOptional()
    @IsBoolean()
    '3.11.1'?: boolean;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.11.2'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.11.3'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.11.4'?: string;

    @ApiPropertyOptional({ type: Boolean })
    @IsOptional()
    @IsBoolean()
    '3.11.5'?: boolean;

    @ApiPropertyOptional({ type: Date })
    @IsOptional()
    @IsDate()
    '3.11.6'?: Date;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    '3.13.1'?: number;

    @ApiPropertyOptional({ type: Number })
    @IsOptional()
    @IsNumber()
    '3.13.2'?: number;

    @ApiPropertyOptional({ type: Date })
    @IsOptional()
    @IsDate()
    '3.3.11'?: Date;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.1'?: string;

    @ApiPropertyOptional({ type: Boolean })
    @IsOptional()
    @IsBoolean()
    '3.5.6'?: boolean;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.7'?: string;

    @ApiPropertyOptional({ type: Boolean })
    @IsOptional()
    @IsBoolean()
    '3.5.8'?: boolean;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.9'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.13'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.17'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.21'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.22'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.23'?: string;

    @ApiPropertyOptional({ type: Boolean })
    @IsOptional()
    @IsBoolean()
    '3.7.1'?: boolean;

    @ApiPropertyOptional({ type: Boolean })
    @IsOptional()
    @IsBoolean()
    '3.7.2'?: boolean;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.7.3'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.7.4'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.7.5'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.7.6'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.7.7'?: string;

    @ApiPropertyOptional({ type: Boolean })
    @IsOptional()
    @IsBoolean()
    '3.10.1'?: boolean;

    @ApiPropertyOptional({ type: Date })
    @IsOptional()
    @IsDate()
    '3.10.2'?: Date;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.10.3'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.2'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.5'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.3'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.4'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.10'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.11'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.12'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.14'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.15'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.16'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.18'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.19'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.5.20'?: string;

    @ApiPropertyOptional({ type: Date })
    @IsOptional()
    @IsDate()
    '3.12.1'?: Date;

    @ApiPropertyOptional({ type: Boolean })
    @IsOptional()
    @IsBoolean()
    '3.12.4'?: boolean;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.12.5'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.12.6'?: string;

    @ApiPropertyOptional({ type: Date })
    @IsOptional()
    @IsDate()
    '3.12.2'?: Date;

    @ApiPropertyOptional({ type: Date })
    @IsOptional()
    @IsDate()
    '3.12.3'?: Date;

    @ApiPropertyOptional({ type: Date })
    @IsOptional()
    @IsDate()
    '3.3.12'?: Date;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.3.13'?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    '3.3.14'?: string;
}
