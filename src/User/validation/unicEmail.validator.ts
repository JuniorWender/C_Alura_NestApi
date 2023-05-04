import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export default class UnicEmailValidator implements ValidatorConstraintInterface {
    
    constructor(private _userRepository: UserRepository) { }

    async validate(email: string, args?: ValidationArguments): Promise<boolean> {
        const user = await this._userRepository.getUserByEmail(email);
        return !user;
    }
}

export const UnicEmail = (validationOptions: ValidationOptions) => {
    return (object: Object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UnicEmailValidator,
        });
    };
}