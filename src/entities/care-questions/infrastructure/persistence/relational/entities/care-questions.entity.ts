import {
    CreateDateColumn,
    Entity,
    UpdateDateColumn,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../../utils/relational-entity-helper';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import {
    QuestionConstraints,
    QuestionType,
} from '../../../../domain/care-questions';
import { CareQuestionOptionsEntity } from '../../../../../care-question-options/infrastructure/persistence/relational/entities/care-question-options.entity';

@Entity({
    name: 'care_questions',
})
export class CareQuestionsEntity extends EntityRelationalHelper {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @IsString()
    description: string;

    @ApiProperty()
    @Column()
    @IsString()
    questionID: string;

    @ApiProperty()
    @Column()
    type: QuestionType;

    @OneToMany(() => CareQuestionOptionsEntity, (option) => option.questionID)
    options: CareQuestionOptionsEntity[];

    @ApiPropertyOptional({ type: 'object' })
    @Column('jsonb', { nullable: true })
    constraints?: QuestionConstraints;

    @ApiPropertyOptional({ type: () => [String], nullable: true })
    @Column('text', { array: true, nullable: true })
    @IsOptional()
    dependentOn?: string[];

    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date;
}
