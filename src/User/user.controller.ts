import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { v4 as uuid } from 'uuid';

import { UserRepository } from "./user.repository";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { AllUsersDto } from "./dto/allUsers.dto";
import { EditUserDto } from "./dto/editUser.dto";

@Controller('/users')
export class UserController {

    constructor(private _userRepository: UserRepository) { }

    @Post()
    async CreateUser(@Body() userData: CreateUserDto) {

        const userEntity = new UserEntity();
        userEntity.name = userData.name;
        userEntity.email = userData.email;
        userEntity.password = userData.password;
        userEntity.id = uuid();

        this._userRepository.save(userEntity)
        return { user: new AllUsersDto(userEntity.id, userEntity.name) , 
                 message: 'User created successfully' };
    }

    @Get()
    async getUsers() {
        const usersave = await this._userRepository.getUsers();
        const listUser = usersave.map(user => new AllUsersDto(
            user.id,
            user.name
            )
        );

        return listUser;
    }

    @Put('/:id')
    async editUser(@Param('id') id: string, @Body() editData: EditUserDto) {
        const editedUser = await this._userRepository.updateUser(id, editData);

        return {
            user : editedUser,
            message: 'User edited successfully'
        }
    }

    @Delete('/:id')
    async deleteUser(@Param('id')id: string){
        const userDeleted = await this._userRepository.deleteUser(id);

        return {
            user: userDeleted,
            message: 'User deleted successfully'
        }
    }
}