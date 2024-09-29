import {
    CreateDateColumn,
    Entity,
    UpdateDateColumn,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
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

    @ApiPropertyOptional({
        type: String,
        description: 'The block that this question belongs to',
    })
    @Column({ nullable: true })
    @IsOptional()
    parentBlock?: string;

    @ManyToMany(() => CareQuestionOptionsEntity, { cascade: true })
    @JoinTable({
        name: 'care_question_option_relations',
        joinColumn: { name: 'questionID', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'optionID', referencedColumnName: 'id' },
    })
    options: CareQuestionOptionsEntity[];

    @ApiPropertyOptional({
        type: 'object',
        example: { minLength: 0, maxLength: 250, minValue: 0, maxValue: 100 },
        description:
            'The minimum and maximum values for the length of a string/value of a number input',
    })
    @Column('jsonb', { nullable: true })
    constraints?: QuestionConstraints;

    @ApiPropertyOptional({
        type: () => [String],
        nullable: true,
        example: ['3.3.5', '3.3.1'],
        description:
            'Lists the previously answered questions that this question is dependent on, if any.',
    })
    @Column('jsonb', { nullable: true })
    @IsOptional()
    dependentOn?: 'jsonb';

    @ApiPropertyOptional({ type: String, example: "CARE Process Initiation Period" })
    @Column({ nullable: true })
    @IsOptional()
    careStatus?: string;

    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date;
}
