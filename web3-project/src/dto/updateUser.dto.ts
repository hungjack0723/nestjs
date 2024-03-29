import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ description: 'User email' })
  readonly email: string;

  @ApiProperty({ description: 'User name' })
  readonly name: string;
}
