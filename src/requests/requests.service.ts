import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal, Like, Between, MoreThan } from 'typeorm';
import { Request } from './entities/request.entity'; 
import { RequestStatus } from '../general/types'; 
import { UpdateRequestDto } from './dto/update-request.dto';
import { GetRequestsFilterDto } from './dto/get-requests-filter-dto';


@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private requestRepository: Repository<Request>,
  ) {}

  async create(request) {
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

  async getByFilter(filter: GetRequestsFilterDto) {

    let request = {};

    if(filter.status){
      request = {
        ...request,
        requestStatus: Equal(filter.status as RequestStatus)
      }
    }
    
    if(filter.atiCode){
      request = {
        ...request,
        atiCode: Equal(filter.atiCode),
      }
    }
    
    if(filter.driverName){
      request = {
        ...request,
        driverName: Equal(filter.driverName),
      }
    }

    if(filter.companyName){
      request = {
        ...request,
        companyName: Equal(filter.companyName),
      }
    }

    if(filter.createdAt){
      request = {
        ...request,
        createdAt: Between(filter.createdAt.start, filter.createdAt.end)
      }
    }

    const requests = await this.requestRepository.findBy(request);
    return requests;
  }
}

