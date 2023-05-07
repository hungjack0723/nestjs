import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ description: 'User id' })
  readonly id: number;

  @ApiProperty({ description: 'User email' })
  readonly email: string;

  @ApiProperty({ description: 'User name' })
  readonly name: string;
}
