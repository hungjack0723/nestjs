import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Logger,
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
  private logger = new Logger('UserController');

  @Get()
  async findAll(): Promise<User[]> {
    this.logger.debug('findAll');
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    this.logger.debug(`createUser ${JSON.stringify(createUserDto)}`);
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    this.logger.debug(`updateUser ${JSON.stringify(updateUserDto)}`);
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.logger.debug(`deleteUser ${JSON.stringify(id)}`);
    await this.userService.delete(id);
  }
}
