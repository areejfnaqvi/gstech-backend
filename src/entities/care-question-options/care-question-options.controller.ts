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
import { CareQuestionOptionsService } from './care-question-options.service';
import { CreateCareQuestionOptionsDto } from './dto/create-care-question-options.dto';
import { UpdateCareQuestionOptionsDto } from './dto/update-care-question-options.dto';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { CareQuestionOptions } from './domain/care-question-options';
import { AuthGuard } from '@nestjs/passport';
import {
    InfinityPaginationResponse,
    InfinityPaginationResponseDto,
} from '../../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../../utils/infinity-pagination';
import { FindAllCareQuestionOptionsDto } from './dto/find-all-care-question-options.dto';

@ApiTags('CareQuestionOptions')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
    path: 'care-question-options',
    version: '1',
})
export class CareQuestionOptionsController {
    constructor(
        private readonly careQuestionOptionsService: CareQuestionOptionsService,
    ) {}

    @Post()
    @ApiCreatedResponse({
        type: CareQuestionOptions,
    })
    create(@Body() createCareQuestionOptionsDto: CreateCareQuestionOptionsDto) {
        return this.careQuestionOptionsService.create(
            createCareQuestionOptionsDto,
        );
    }

    @Get()
    @ApiOkResponse({
        type: InfinityPaginationResponse(CareQuestionOptions),
    })
    async findAll(
        @Query() query: FindAllCareQuestionOptionsDto,
    ): Promise<InfinityPaginationResponseDto<CareQuestionOptions>> {
        const page = query?.page ?? 1;
        let limit = query?.limit ?? 10;
        if (limit > 50) {
            limit = 50;
        }

        return infinityPagination(
            await this.careQuestionOptionsService.findAllWithPagination({
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
        type: CareQuestionOptions,
    })
    findOne(@Param('id') id: number) {
        return this.careQuestionOptionsService.findOne(id);
    }

    @Get(':questionID')
    @ApiParam({
        name: 'questionID',
        type: String,
        required: true,
    })
    @ApiOkResponse({
        type: CareQuestionOptions,
    })
    findByQuestionID(@Param('questionID') questionID: string) {
        return this.careQuestionOptionsService.findByQuestionID(questionID);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        type: Number,
        required: true,
    })
    @ApiOkResponse({
        type: CareQuestionOptions,
    })
    update(
        @Param('id') id: number,
        @Body() updateCareQuestionOptionsDto: UpdateCareQuestionOptionsDto,
    ) {
        return this.careQuestionOptionsService.update(
            id,
            updateCareQuestionOptionsDto,
        );
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        type: Number,
        required: true,
    })
    remove(@Param('id') id: number) {
        return this.careQuestionOptionsService.remove(id);
    }

    @Get(':questionID')
    @ApiParam({
        name: 'questionID',
        type: String,
        required: true,
    })
    @ApiOkResponse({
        type: () => [CareQuestionOptions],
    })
    findOptionByQuestionID(@Param('questionID') questionID: string) {
        return this.careQuestionOptionsService.findOptionsByQuestionID(
            questionID,
        );
    }
}
