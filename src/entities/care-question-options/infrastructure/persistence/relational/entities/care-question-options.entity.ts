import {
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
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
    @IsString()
    questionID: string;

    @ManyToOne(() => CareQuestionsEntity, (question) => question.options)
    @JoinColumn({ name: 'questionID' })
    question: CareQuestionsEntity;

    @ApiProperty()
    @Column()
    @IsString()
    option: string;

    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date;
}
