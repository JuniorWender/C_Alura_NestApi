import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    private users = [];

    async save(user) {
        this.users.push(user);
    }

    async getUsers() {
        if (this.users == null) 
            return console.log('No users found');
        else
            return this.users;
    }
}