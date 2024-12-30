import { NestFactory } from '@nestjs/core';
import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGatewayModule);
  const documentBuilder = new DocumentBuilder()
    .setTitle('Bookstore API Gateway')
    .setDescription('The API Gateway Service')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.port ?? 3000);
  console.log('App listening at http://localhost:3000/api');
}

bootstrap();
