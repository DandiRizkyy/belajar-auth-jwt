import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from './roles.decorator'
import { Role } from './entity/role.enum';

@Controller('users')
export class UsersController {
constructor(private userService: UsersService){}
    @Get('username')
    async findOne(username: string){
        return await this.userService.findOne(username);
    }

    @Get()
    async findAll(){
        return await this.userService.findAll();
    }

    
    @Post()
    @Roles(Role.ADMIN)
    async create(){
        return `this action create user`
    }

    @Delete(':id')
    async delete(id: number){
        return `this action delete an user`
    }
}
