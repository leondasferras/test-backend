import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request } from './entities/request.entity';

@ApiTags('Requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @ApiOperation({ summary: "Список заявок" })
  @ApiResponse({ status: 200, description: "Success" })
  @Get()
  findAll() {
    return this.requestsService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.requestsService.findOne(+id);
  }
  
  @ApiOperation({ summary: "Создать заявку" })
  @Post()
  create(@Body() request: CreateRequestDto) {
    return this.requestsService.create(request);
  }
  
  @Patch(':id')
  update(@Param('id') id: number, @Body() request: UpdateRequestDto) {
    return this.requestsService.update(+id, request);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.requestsService.remove(id);
  }
}
