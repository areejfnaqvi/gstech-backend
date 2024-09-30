import {
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../../utils/relational-entity-helper';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
    name: 'care_form_data',
})
export class CareFormDataEntity extends EntityRelationalHelper {
    @ApiProperty({ type: Number })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ type: String, example: 'john.doe@example.com' })
    @Column({ type: String })
    submittedByEmail: string;

    @ApiProperty({ type: String, example: 'John' })
    @Column({ type: String })
    submittedByName: string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.3.1': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.3.2': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.3.3': string;

    @ApiProperty({ type: Number })
    @Column({ type: Number, nullable: true })
    '3.3.4': number;

    @ApiProperty({
        type: Number,
        name: 'Social Security Number',
        example: 111223333,
    })
    @Column({ type: Number, unique: true })
    '3.3.5': number;

    @ApiProperty({ type: Number })
    @Column({ type: Number, nullable: true })
    '3.3.6': number;

    @ApiProperty({ type: Date })
    @Column({ type: Date, nullable: true })
    '3.3.7': Date;

    @ApiProperty({ type: Date })
    @Column({ type: Date, nullable: true })
    '3.3.8': Date;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.3.9': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.4.1': string;

    @ApiProperty()
    @Column( "text", { array: true, nullable: true })
    '3.4.2': any[];

    @ApiProperty()
    @Column( "text", { array: true, nullable: true })
    '3.4.3': any[];

    @ApiProperty()
    @Column( "text", { array: true, nullable: true })
    '3.4.6': any[];

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.4.7': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.4.8': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.4.9': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.4.10': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.4.11': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.4.12': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.4.13': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.4.14': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.4.4': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.4.5': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.3.10': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.6.1': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.6.2': string;

    @ApiProperty({ type: Number })
    @Column({ type: Number, nullable: true })
    '3.8.1': number;

    @ApiProperty({ type: Boolean })
    @Column({ type: Boolean, nullable: true })
    '3.8.2': boolean;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.9.1': string;

    @ApiProperty({ type: Number })
    @Column({ type: Number, nullable: true })
    '3.9.2': number;

    @ApiProperty({ type: Number })
    @Column({ type: Number, nullable: true })
    '3.9.3': number;

    @ApiProperty({ type: Number })
    @Column({ type: Number, nullable: true })
    '3.9.4': number;

    @ApiProperty({ type: Number })
    @Column({ type: Number, nullable: true })
    '3.9.5': number;

    @ApiProperty({ type: Boolean })
    @Column({ type: Boolean, nullable: true })
    '3.11.1': boolean;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.11.2': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.11.3': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.11.4': string;

    @ApiProperty({ type: Boolean })
    @Column({ type: Boolean, nullable: true })
    '3.11.5': boolean;

    @ApiProperty({ type: Date })
    @Column({ type: Date, nullable: true })
    '3.11.6': Date;

    @ApiProperty({ type: Number })
    @Column({ type: Number, nullable: true })
    '3.13.1': number;

    @ApiProperty({ type: Number })
    @Column({ type: Number, nullable: true })
    '3.13.2': number;

    @ApiProperty({ type: Date })
    @Column({ type: Date, nullable: true })
    '3.3.11': Date;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.1': string;

    @ApiProperty({ type: Boolean })
    @Column({ type: Boolean, nullable: true })
    '3.5.6': boolean;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.7': string;

    @ApiProperty({ type: Boolean })
    @Column({ type: Boolean, nullable: true })
    '3.5.8': boolean;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.9': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.13': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.17': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.21': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.22': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.23': string;

    @ApiProperty({ type: Boolean })
    @Column({ type: Boolean, nullable: true })
    '3.7.1': boolean;

    @ApiProperty({ type: Boolean })
    @Column({ type: Boolean, nullable: true })
    '3.7.2': boolean;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.7.3': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.7.4': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.7.5': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.7.6': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.7.7': string;

    @ApiProperty({ type: Boolean })
    @Column({ type: Boolean, nullable: true })
    '3.10.1': boolean;

    @ApiProperty({ type: Date })
    @Column({ type: Date, nullable: true })
    '3.10.2': Date;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.10.3': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.2': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.5': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.3': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.4': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.10': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.11': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.12': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.14': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.15': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.16': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.18': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.19': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.5.20': string;

    @ApiProperty({ type: Date })
    @Column({ type: Date, nullable: true })
    '3.12.1': Date;

    @ApiProperty({ type: Boolean })
    @Column({ type: Boolean, nullable: true })
    '3.12.4': boolean;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.12.5': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.12.6': string;

    @ApiProperty({ type: Date })
    @Column({ type: Date, nullable: true })
    '3.12.2': Date;

    @ApiProperty({ type: Date })
    @Column({ type: Date, nullable: true })
    '3.12.3': Date;

    @ApiProperty({ type: Date })
    @Column({ type: Date, nullable: true })
    '3.3.12': Date;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.3.13': string;

    @ApiProperty({ type: String })
    @Column({ type: String, nullable: true })
    '3.3.14': string;

    @ApiProperty({ type: Date })
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({ type: Date })
    @UpdateDateColumn()
    updatedAt: Date;
}
