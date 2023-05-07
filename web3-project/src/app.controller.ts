import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserService } from './app.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put()
  async update(@Body() user: User): Promise<User> {
    return this.userService.update(user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.userService.delete(id);
  }
}
