import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'User email' })
  readonly email: string;

  @ApiProperty({ description: 'User name' })
  readonly name: string;
}
