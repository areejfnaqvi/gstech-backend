import {
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    Column,
    ManyToMany,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CareQuestionsEntity } from '../../../../../care-questions/infrastructure/persistence/relational/entities/care-questions.entity';

@Entity({
    name: 'care_question_options',
})
export class CareQuestionOptionsEntity extends EntityRelationalHelper {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @IsNumber()
    optionID: number;

    @ApiProperty()
    @Column()
    @IsString()
    option: string;

    @ManyToMany(() => CareQuestionsEntity, (question) => question.options)
    questions: CareQuestionsEntity[];

    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date;
}
