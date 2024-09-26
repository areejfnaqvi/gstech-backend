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
    @Length(9, 9, {
        message: 'The length of SSNs must be exactly 9 characters',
    })
    '3.3.5': number;
}
