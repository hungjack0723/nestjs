import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Body, Get, Param, Post, Put, Delete } from '@nestjs/common';

export class UserService {
  logger: any;
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @ApiResponse({ status: 200, description: 'Return all users.' })
  @Get()
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Create user.' })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    return this.userRepository.save(user);
  }

  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'Update user.' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    user.email = updateUserDto.email;
    user.name = updateUserDto.name;
    return this.userRepository.save(user);
  }

  @ApiResponse({ status: 204, description: 'Delete user.' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
