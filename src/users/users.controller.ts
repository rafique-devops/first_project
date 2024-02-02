import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getUser()
    {
        return [];
    }

    @Get(':id')
    findUserById(@Param('id') id: string)
    {
        return { id }
    }

    @Post()
    createUser(@Body() user: {})
    {
        return user;
    }

    @Post(':id')
    verifyUser(@Param('id') id: string)
    {
        return { id }
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() userUpdate: {})
    {
        return {id, userUpdate}
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string)
    {
        return { id }
    }


}
