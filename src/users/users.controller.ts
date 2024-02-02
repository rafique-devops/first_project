import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    findAll(@Query('role') role?: 'Intern' | 'Admin' | 'SuperAdmin')
    {
        return this.userService.findAll(role)
    }

    @Get(':id')
    findUserById(@Param('id') id: string)
    {
        return this.userService.findUserById(+id)
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
