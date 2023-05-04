import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
    
    private users: UserEntity[] = [];

    private findById(id: string) {
        const user = this.users.find(user => user.id === id);

        if(!user) {
            throw new Error('User not found');
        }

        return user;
    }

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

    async updateUser(id: string, updateData: Partial<UserEntity>) {

        const user = this.findById(id);

        Object.entries(updateData).forEach(([key, value]) => {
            if(key === 'id') {
                return;
            }

            user[key] = value;
        });

        return user;
    }

    async deleteUser(id : string){
        const user = this.findById(id);

        this.users = this.users.filter(savedUser => savedUser.id !== id);

        return user;
    }
}