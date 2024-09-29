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
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { CareQuestionsService } from './care-questions.service';
import { CreateCareQuestionsDto } from './dto/create-care-questions.dto';
import { UpdateCareQuestionsDto } from './dto/update-care-questions.dto';
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { CareQuestions } from './domain/care-questions';
import { AuthGuard } from '@nestjs/passport';
import {
    InfinityPaginationResponse,
    InfinityPaginationResponseDto,
} from '../../utils/dto/infinity-pagination-response.dto';
import { infinityPagination } from '../../utils/infinity-pagination';
import { QueryAllCareQuestions } from './dto/query-care-questions.dto';
import { AddOptionsToQuestionDto } from './dto/add-options-to-question.dto';

@ApiTags('CareQuestions')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
    path: 'care-questions',
    version: '1',
})
export class CareQuestionsController {
    constructor(private readonly careQuestionsService: CareQuestionsService) {}

    @Post()
    @ApiCreatedResponse({
        type: CareQuestions,
    })
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCareQuestionsDto: CreateCareQuestionsDto) {
        return this.careQuestionsService.create(createCareQuestionsDto);
    }

    @Get()
    @ApiOkResponse({
        type: InfinityPaginationResponse(CareQuestions),
    })
    @HttpCode(HttpStatus.OK)
    async findAll(
        @Query() query: QueryAllCareQuestions,
    ): Promise<InfinityPaginationResponseDto<CareQuestions>> {
        const page = query?.page ?? 1;
        let limit = query?.limit ?? 10;
        if (limit > 50) {
            limit = 50;
        }

        return infinityPagination(
            await this.careQuestionsService.findAllWithPagination({
                paginationOptions: {
                    page,
                    limit,
                },
            }),
            { page, limit },
        );
    }

    @Get(':questionID')
    @ApiParam({
        name: 'questionID',
        type: String,
        required: true,
    })
    @ApiOkResponse({
        type: CareQuestions,
    })
    @HttpCode(HttpStatus.OK)
    findByQuestionID(@Param('questionID') questionID: string) {
        return this.careQuestionsService.findByQuestionID(questionID);
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        type: Number,
        required: true,
    })
    @ApiOkResponse({
        type: CareQuestions,
    })
    @HttpCode(HttpStatus.OK)
    findByID(@Param('id') id: number) {
        return this.careQuestionsService.findByID(id);
    }

    @Get(':careStatus')
    @ApiParam({
        name: 'careStatus',
        type: String,
        required: true,
    })
    @ApiOkResponse({
        type: CareQuestions,
    })
    @HttpCode(HttpStatus.OK)
    findByCareStatus(@Param('careStatus') careStatus: string) {
        return this.careQuestionsService.findByCareStatus(careStatus);
    }

    @Patch(':questionID')
    @ApiParam({
        name: 'questionID',
        type: String,
        required: true,
    })
    @ApiOkResponse({
        type: CareQuestions,
    })
    @HttpCode(HttpStatus.OK)
    update(
        @Param('questionID') questionID: CareQuestions['questionID'],
        @Body() updateCareQuestionsDto: UpdateCareQuestionsDto,
    ) {
        return this.careQuestionsService.update(
            questionID,
            updateCareQuestionsDto,
        );
    }

    @Post('add-options')
    async addOptionsToQuestion(@Body() addOptionsDto: AddOptionsToQuestionDto) {
        return this.careQuestionsService.addOptionsToQuestion(addOptionsDto);
    }
}
