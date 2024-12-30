import { Injectable } from '@nestjs/common';
import { UserDto } from '@app/contracts/users/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 24,
    },
  ];

  findAll(): UserDto[] {
    return this.users;
  }
}
