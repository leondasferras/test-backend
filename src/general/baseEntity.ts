import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  IntegerType,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: IntegerType;

  @CreateDateColumn()
  createdAt: Date;

}
