import { IsEmail, IsNumber, IsString, Length } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateCareFormDataDto {
    @ApiProperty({ type: String, example: 'john.doe@example.com' })
    @IsEmail()
    submittedByEmail: string;

    @ApiProperty({ type: String, example: 'John' })
    @IsString()
    submittedByName: string;

    @ApiProperty({ type: Number })
    @IsNumber()
    '3.3.5': number;
}
