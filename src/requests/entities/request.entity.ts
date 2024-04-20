import { Entity, Column } from 'typeorm';
import { IsEnum } from 'class-validator';
import { BaseEntity } from "src/general/baseEntity";
import { RequestStatus } from 'src/general/types';

@Entity()
export class Request extends BaseEntity {
  @Column({type: 'varchar'})
  companyName: string;

  @Column({type: 'varchar'})
  driverName: string;

  @Column({type: 'varchar'})
  driverPhoneNumber: string;

  @Column({
    type: 'varchar',
    nullable: true
  })
  commentary: string;

  @Column({
    type: 'varchar',
    default: RequestStatus.NEW
  })
  @IsEnum(RequestStatus)
  requestStatus: RequestStatus;

  @Column({type: 'varchar'})
  atiCode: string;
}
