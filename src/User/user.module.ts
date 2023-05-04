import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import UnicEmailValidator from './validation/unicEmail.validator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, UnicEmailValidator],
})
export class UserModule {}
