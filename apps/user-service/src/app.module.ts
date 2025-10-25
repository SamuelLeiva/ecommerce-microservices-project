import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  controllers: [AppController],
  imports: [DatabaseModule, PrismaModule, AuthModule, ProductModule],
})
export class AppModule {}
