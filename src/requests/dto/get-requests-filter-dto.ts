import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetRequestsFilterDto {

  @ApiProperty()
  @IsOptional()
  companyName?:string;

  @ApiProperty()
  @IsOptional()
  driverName?: string;

  @ApiProperty()
  @IsOptional()
  status?: string;

  @ApiProperty()
  @IsOptional()
  atiCode?: string;

  @ApiProperty()
  @IsOptional()
  createdAt?: {
    start: Date,
    end: Date
  };
}
