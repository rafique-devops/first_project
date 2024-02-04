import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id":1,
            "name":"Rafique",
            "email":"rafique@gmail.com",
            "role":"SuperAdmin"
        },
        {
            "id":2,
            "name":"Sankalp",
            "email":"sankalp@gmail.com",
            "role":"Admin"
        },
        {
            "id":3,
            "name":"Vinit",
            "email":"vinit@gmail.com",
            "role":"Intern"
        },
        {
            "id":4,
            "name":"Rahul",
            "email":"rahul@gmail.com",
            "role":"SuperAdmin"
        },
        {
            "id":5,
            "name":"Krishna",
            "email":"krishna@gmail.com",
            "role":"Admin"
        },
        {
            "id":6,
            "name":"Himanshu",
            "email":"himanshu@gmail.com",
            "role":"Intern"
        },
    ]

    findAll(role?: 'Intern' | 'Admin' | 'SuperAdmin')
    {
        if(role)
        {
            const roleArray =  this.users.filter(user => user.role === role)
            if(roleArray.length === 0)
            throw new NotFoundException('Role Not Found');
            return roleArray;
        }
        return this.users;
    }

    findUserById(id: number)
    {
        const user = this.users.find (user => user.id === id)
        if(!user) throw new NotFoundException('User Not Found');
        return user;
    }

    createUser(createUserDto: CreateUserDto)
    {
        const usersByHighestId = [...this.users].sort((a,b)=> b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser);
        console.log(newUser);
        return newUser;
    }

    deleteUser(id:number)
    {

    }

}
