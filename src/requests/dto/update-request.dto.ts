import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRequestDto } from './create-request.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { RequestStatus } from 'src/general/types';

export class UpdateRequestDto extends PartialType(CreateRequestDto) {
    @ApiProperty()
    @IsOptional()
    @IsEnum(RequestStatus)
    requestStatus: RequestStatus;
}
