import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse,getSchemaPath, ApiOkResponse } from '@nestjs/swagger';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { GetRequestsFilterDto } from './dto/get-requests-filter-dto';
import { ResponseTypeRequestObject } from 'src/general/types';
import { log } from 'console';

@ApiTags('Requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @ApiOperation({ summary: "Получить список заявок" })
  @ApiOkResponse(ResponseTypeRequestObject)
  @Get()
  findAll() {
    return this.requestsService.findAll();
  }
  
  @ApiOperation({ summary: "Найти заявку по id" })
  @ApiOkResponse(ResponseTypeRequestObject)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.requestsService.findOne(+id);
  }
  
  @ApiOperation({ summary: "Создать заявку" })
  @ApiOkResponse(ResponseTypeRequestObject)
  @Post()
  create(@Body() request: CreateRequestDto) {
    return this.requestsService.create(request);
  }
  
  @ApiOperation({ summary: "Редактировать заявку" })
  @ApiOkResponse(ResponseTypeRequestObject)
  @Patch(':id')
  update(@Param('id') id: number, @Body() request: UpdateRequestDto) {
    return this.requestsService.update(+id, request);
  }

  @ApiOperation({ summary: "Удалить заявку" })
  @ApiOkResponse(ResponseTypeRequestObject)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.requestsService.remove(id);
  }
  
  @ApiOperation({ summary: "Получить список заявок с учетом фильтра" })
  @Post('by-filter')
  findByFilter(@Body() request: GetRequestsFilterDto) {
    return this.requestsService.getByFilter(request);
  }
}
