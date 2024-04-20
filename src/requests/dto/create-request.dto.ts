import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRequestDto {

  @ApiProperty()
  @IsNotEmpty()
  companyName:string;

  @ApiProperty()
  @IsNotEmpty()
  driverName: string;

  @ApiProperty()
  @IsNotEmpty()
  driverPhoneNumber: string;

  @ApiProperty()
  @IsOptional()
  commentary: string;

  @ApiProperty()
  @IsNotEmpty()
  atiCode: string;
}
