import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getUser():string
    {
        return this.userService.getUser();
    }

    @Post()
    verifyUser():string
    {
        return this.userService.verifyUser();
    }
}
