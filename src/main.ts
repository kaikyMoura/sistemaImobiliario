import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Casa } from './model/casa.model'
import { Apartamento } from './model/apartamento.model'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Api sistema Imobiliário')
    .setDescription('Endpoints do back end do sistema imobiliário!')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config, {
    include: [Casa, Apartamento],
  })
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}
bootstrap()
