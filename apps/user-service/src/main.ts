import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: ['amqp://guest:guest@localhost:5672'], // o rabbitmq si usas docker-compose
  //     queue: 'user_queue',
  //     queueOptions: { durable: false },
  //   },
  // });

  // await app.listen();
  // console.log('✅ User Service is listening to RabbitMQ');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(3001);
  console.log(`✅ User Service running on http://localhost:3001`);
}
bootstrap();
