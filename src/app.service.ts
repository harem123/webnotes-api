import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome AgileSotf developers!';
  }
}

@Injectable()
export class UserService {
  // Change function name to getUsers
  getUsers(): string[] { // Change return type to string[](stirng Array) 
    return ['Camilo', 'Edd'];
  }
}