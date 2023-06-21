import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Forbids non-DTOs shape types
      forbidNonWhitelisted: true,
      // Strip all non-DTOs types
      whitelist: true,
      // Transform into a instance of DTO class and converts primitive types
      // It could impact performance.
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
