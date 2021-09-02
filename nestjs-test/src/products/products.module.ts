import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

//have to define what our controllers and providers
@Module({
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
