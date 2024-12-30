import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { USERS_CLIENT } from './constant';
import { Observable } from 'rxjs';
import { UserDto } from '@app/contracts/users/user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject(USERS_CLIENT) private usersClient: ClientProxy) {}

  findAll(): Observable<UserDto[]> {
    return this.usersClient.send('users.findAll', {});
  }
}
