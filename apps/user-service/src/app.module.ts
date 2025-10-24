import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  imports: [DatabaseModule, PrismaModule, AuthModule],
})
export class AppModule {}
