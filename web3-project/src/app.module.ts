import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/db.config';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig)],
})
export class AppModule {}
