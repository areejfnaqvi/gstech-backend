import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Query,
} from '@nestjs/common';
import { CareFormDataService } from './care-form-data.service';
import { CreateCareFormDataDto } from './dto/create-care-form-data.dto';
import { UpdateCareFormDataDto } from './dto/update-care-form-data.dto';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { CareFormData } from './domain/care-form-data';
import { AuthGuard } from '@nestjs/passport';
import {
    InfinityPaginationResponse,
    InfinityPaginationResponseDto,
} from '../../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../../utils/infinity-pagination';
import { FindAllCareFormDataDto } from './dto/find-all-care-form-data.dto';

@ApiTags('CareFormData')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
    path: 'care-form-data',
    version: '1',
})
export class CareFormDataController {
    constructor(private readonly careFormDataService: CareFormDataService) {}

    @Post()
    @ApiCreatedResponse({
        type: CareFormData,
    })
    create(@Body() createCareFormDataDto: CreateCareFormDataDto) {
        return this.careFormDataService.create(createCareFormDataDto);
    }

    @Get()
    @ApiOkResponse({
        type: InfinityPaginationResponse(CareFormData),
    })
    async findAll(
        @Query() query: FindAllCareFormDataDto,
    ): Promise<InfinityPaginationResponseDto<CareFormData>> {
        const page = query?.page ?? 1;
        let limit = query?.limit ?? 10;
        if (limit > 50) {
            limit = 50;
        }

        return infinityPagination(
            await this.careFormDataService.findAllWithPagination({
                paginationOptions: {
                    page,
                    limit,
                },
            }),
            { page, limit },
        );
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        type: Number,
        required: true,
    })
    @ApiOkResponse({
        type: CareFormData,
    })
    findById(@Param('id') id: number) {
        return this.careFormDataService.findById(id);
    }

    @Get(':ssn')
    @ApiParam({
        name: 'ssn',
        type: Number,
        required: true,
    })
    @ApiOkResponse({
        type: CareFormData,
    })
    findBySSN(@Param('ssn') ssn: number) {
        return this.careFormDataService.findBySSN(ssn);
    }

    @Patch(':ssn')
    @ApiParam({
        name: 'ssn',
        type: Number,
        required: true,
    })
    @ApiOkResponse({
        type: CareFormData,
    })
    update(
        @Param('ssn') ssn: number,
        @Body() updateCareFormDataDto: UpdateCareFormDataDto,
    ) {
        return this.careFormDataService.update(ssn, updateCareFormDataDto);
    }

    @Delete(':ssn')
    @ApiParam({
        name: 'ssn',
        type: Number,
        required: true,
    })
    remove(@Param('ssn') ssn: number) {
        return this.careFormDataService.remove(ssn);
    }
}
