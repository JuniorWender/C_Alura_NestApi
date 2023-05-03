import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { ProductModule } from './Product/product.module';

@Module({
  imports: [UserModule,ProductModule],
})
export class AppModule {}
