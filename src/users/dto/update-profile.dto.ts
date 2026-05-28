import { IsString, IsOptional, IsNumber, IsPositive, IsInt } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiPropertyOptional({ example: 'John Doe' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 75.5, description: 'User weight in kg' })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  weight?: number;

  @ApiPropertyOptional({ example: 1.80, description: 'User height in meters' })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  height?: number;

  @ApiPropertyOptional({ example: 26, description: 'User age' })
  @IsOptional()
  @IsInt()
  @IsPositive()
  age?: number;
}
