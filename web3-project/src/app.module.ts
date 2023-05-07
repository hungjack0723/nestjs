import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './app.controller';
import { UserService } from './app.service';
import { ormConfig } from './config/db.config';
import { User } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
