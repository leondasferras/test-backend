import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from './entities/request.entity'; 
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

import { RequestStatus } from 'src/general/types';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private requestRepository: Repository<Request>,
  ) {}

  async create(request: CreateRequestDto) {
    return await this.requestRepository.save(request);
  }

  async findAll(): Promise<Request[]> {
    return this.requestRepository.find();
  }

  async findOne(id: number) {
    const request = await this.requestRepository.findOneBy({id:id});
    if (!request) throw new NotFoundException('Такой заявки не существует');
    return request;
  }

  async update(id: number, updatedRequest: UpdateRequestDto) {
    const request = await this.requestRepository.findOneBy({id:id});
    if (!request) throw new NotFoundException('Такой заявки не существует');
    await this.requestRepository.update(id, updatedRequest);
    return await this.requestRepository.findOneBy({id:id});
  }

  async remove(id: number) {
    const request = await this.requestRepository.findOneBy({id:id});
    if (!request) throw new NotFoundException('Такой заявки не существует');
    await this.requestRepository.delete({ id });
    return request;
  }
}
