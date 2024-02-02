import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Welcome To Nest JS World`;
  }

  getUser(): string {
    return `Please Find the List of Users`;
  }
}
