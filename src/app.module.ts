import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestsModule } from './requests/requests.module';
import { Request } from './requests/entities/request.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test_user',
      password: 'password',
      database: 'test_project',
      entities: [Request],
      synchronize: true,
    }),
    RequestsModule
  ]
})
export class AppModule {}
