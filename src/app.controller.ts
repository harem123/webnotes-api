import { Controller, Get, Post, Body} from '@nestjs/common';
import { AppService, UserService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('/users') // Add '/user' route
export class UserController {
  constructor(private readonly appService: UserService) {}
// Change the function name to getUsers
  @Get()
  getUsers(): string[] { // Change return type to string[](stirng Array) 
     // Change the service method name to getUsers
     return this.appService.getUsers(); 
  }
  @Post()
createProduct(
  @Body('name') name: string, 
  @Body('description') description: string
) {
  return `Creo el producto ${name} con descripción ${description}.`;
}
}
