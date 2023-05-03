import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDto } from "./dto/CreateUser.dto";

@Controller('/users')
export class UserController {

    constructor(private _userRepository: UserRepository) { }

    @Post()
    async CreateUser(@Body() userData: CreateUserDto) {
        this._userRepository.save(userData)
        return userData;
    }

    @Get()
    async getUsers() {
        return this._userRepository.getUsers();
    }
}