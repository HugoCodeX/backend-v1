import { Controller, Patch, Body, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { UsersService } from './users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { User } from 'src/db/schema';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Patch('me')
  @ApiOperation({ summary: 'Update the current user profile' })
  async updateProfile(
    @CurrentUser() user: User,
    @Body() dto: UpdateProfileDto,
  ) {
    if (Object.keys(dto).length === 0) {
      return { message: 'No changes provided', user };
    }

    const updatedUser = await this.usersService.update(user.id, dto);

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }
    
    // Omitimos datos sensibles
    const { passwordHash, verificationToken, resetToken, refreshTokenHash, ...safeUser } = updatedUser;
    
    return {
      message: 'Profile updated successfully',
      user: safeUser,
    };
  }
}
