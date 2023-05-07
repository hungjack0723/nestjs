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
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Put()
  async update(@Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.userService.delete(id);
  }
}
