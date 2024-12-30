import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UserDto } from '@app/contracts/users/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({
    description: 'Get all users fetched successfully',
    type: UserDto,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'Get all users not found' })
  findAll(): Observable<UserDto[]> {
    return this.usersService.findAll();
  }
}
