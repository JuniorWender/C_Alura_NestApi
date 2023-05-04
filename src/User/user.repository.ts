import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
    private users: UserEntity[] = [];

    async save(user: UserEntity) {
        this.users.push(user);
    }

    async getUsers() {
        return this.users;
    }

    async getUserByEmail(email: string) {
        const UserExist = this.users.find(user => user.email === email);
        return UserExist !== undefined;
    }
}