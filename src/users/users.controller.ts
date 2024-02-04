import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    findAll(@Query('role',ValidationPipe) role?: 'Intern' | 'Admin' | 'SuperAdmin')
    {
        return this.userService.findAll(role)
    }

    @Get(':id')
    findUserById(@Param('id', ParseIntPipe) id: number)
    {
        return this.userService.findUserById(id)
    }

    //validation is applied to this only
    @Post()
    createUser(@Body(ValidationPipe) createUserDto: CreateUserDto)
    {
        return this.userService.createUser(createUserDto);   
    }

    @Post(':id')
    verifyUser(@Param('id',ParseIntPipe) id: number)
    {
        return { id }
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body(ValidationPipe) userUpdate: {})
    {
        return {id, userUpdate}
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string)
    {
        return {id}
    }


}
